import { useState, useEffect } from 'react';

export interface QueuedHarvest {
  id: string; // UUID
  species: string;
  quantity: string;
  notes?: string;
  lat: string;
  lng: string;
  sealId?: string;
  photoBase64?: string;
  photoName?: string;
  timestamp: number;
  syncStatus: 'queued' | 'syncing' | 'failed';
}

const STORAGE_KEY = 'mulpath_offline_harvests_queue';
const API_BASE = (import.meta as any).env?.VITE_API_URL || 'https://mulpath.onrender.com';

export function getQueuedHarvests(): QueuedHarvest[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to read offline queue', e);
    return [];
  }
}

export function saveQueuedHarvest(harvest: Omit<QueuedHarvest, 'id' | 'timestamp' | 'syncStatus'>): QueuedHarvest {
  const existing = getQueuedHarvests();
  // Cap local storage at 50 entries
  if (existing.length >= 50) {
    throw new Error('Local offline storage limit reached (50 entries). Please sync existing harvests.');
  }

  const newEntry: QueuedHarvest = {
    ...harvest,
    id: 'queued-' + (crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`),
    timestamp: Date.now(),
    syncStatus: 'queued',
  };

  const updated = [newEntry, ...existing];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('mulpath-queue-updated'));
  return newEntry;
}

export function removeQueuedHarvest(id: string) {
  const existing = getQueuedHarvests();
  const filtered = existing.filter(item => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  window.dispatchEvent(new Event('mulpath-queue-updated'));
}

export async function syncQueuedHarvests(): Promise<{ synced: number; failed: number }> {
  const queue = getQueuedHarvests();
  if (queue.length === 0) return { synced: 0, failed: 0 };

  let synced = 0;
  let failed = 0;

  // Process oldest first (FIFO)
  const sorted = [...queue].sort((a, b) => a.timestamp - b.timestamp);

  for (const item of sorted) {
    try {
      const formData = new FormData();
      formData.append('species', item.species);
      formData.append('quantity', item.quantity);
      formData.append('lat', item.lat);
      formData.append('lng', item.lng);
      formData.append('notes', `${item.notes || ''} [NFC: ${item.sealId || 'N/A'}] (Synced from offline queue)`);

      if (item.photoBase64) {
        // Convert Base64 back to Blob/File
        const res = await fetch(item.photoBase64);
        const blob = await res.blob();
        formData.append('photo', blob, item.photoName || 'harvest.jpg');
      }

      const res = await fetch(`${API_BASE}/api/harvests`, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        removeQueuedHarvest(item.id);
        synced++;
      } else {
        failed++;
      }
    } catch (e) {
      failed++;
    }
  }

  return { synced, failed };
}

export function useOfflineSync() {
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [queue, setQueue] = useState<QueuedHarvest[]>(getQueuedHarvests());
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      triggerAutoSync();
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    const handleQueueUpdate = () => {
      setQueue(getQueuedHarvests());
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('mulpath-queue-updated', handleQueueUpdate);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('mulpath-queue-updated', handleQueueUpdate);
    };
  }, []);

  const triggerAutoSync = async () => {
    if (getQueuedHarvests().length === 0 || isSyncing) return;
    setIsSyncing(true);
    try {
      await syncQueuedHarvests();
    } finally {
      setIsSyncing(false);
      setQueue(getQueuedHarvests());
    }
  };

  return {
    isOnline,
    queue,
    isSyncing,
    syncNow: triggerAutoSync,
    queueCount: queue.length,
  };
}
