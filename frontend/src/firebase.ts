import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCP5hu9zKDwjHh2pG76Xay5AD5VjmQjMn0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "iamudit02-86413.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "iamudit02-86413",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "iamudit02-86413.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "802477862749",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:802477862749:web:4719fa237cb58ec7b8c2b4",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-XYXMRT7PVN"
};

// Initialize Firebase (singleton pattern)
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);

// Initialize Analytics conditionally (only in browser environments where supported)
export let analytics: any = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export default app;
