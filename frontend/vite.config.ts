import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'logo.jpg', 'icons.svg'],
      manifest: {
        name: 'Mūlpath — Ayurvedic Herb Traceability',
        short_name: 'Mūlpath',
        description: 'Field-first Ayurvedic herb traceability: GPS, AI species ID, blockchain recording — works offline.',
        theme_color: '#050505',
        background_color: '#050505',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: '/collector',
        scope: '/',
        icons: [
          {
            src: '/pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        shortcuts: [
          {
            name: 'Collector Portal',
            short_name: 'Collector',
            description: 'Log herb harvest in the field',
            url: '/collector',
            icons: [{ src: '/pwa-192.png', sizes: '192x192' }]
          },
          {
            name: 'Verify Product',
            short_name: 'Verify',
            description: 'Scan QR code to verify herb authenticity',
            url: '/verify',
            icons: [{ src: '/pwa-192.png', sizes: '192x192' }]
          }
        ],
        categories: ['productivity', 'health', 'utilities'],
        lang: 'en-IN'
      },
      workbox: {
        // Cache strategies
        runtimeCaching: [
          // App shell — cache first
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
            }
          },
          // TensorFlow.js model weights — cache permanently
          {
            urlPattern: /^https:\/\/storage\.googleapis\.com\/tfjs-models\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'tfjs-models-cache',
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 30 }
            }
          },
          // CDN assets (unpkg leaflet icons etc.) — stale while revalidate
          {
            urlPattern: /^https:\/\/unpkg\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'cdn-cache', expiration: { maxEntries: 20 } }
          },
          // OpenStreetMap tiles — cache with fallback
          {
            urlPattern: /^https:\/\/[abc]\.tile\.openstreetmap\.org\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'osm-tiles-cache',
              expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 7 }
            }
          },
          // Local API — network first, offline fallback
          {
            urlPattern: /\/api\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 },
              networkTimeoutSeconds: 5
            }
          }
        ],
        // Allow bundle caching up to 5MB (for TF.js + PDF libs)
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        // Pre-cache all build assets
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        // Skip Workbox logging in production
        skipWaiting: true,
        clientsClaim: true
      },
      devOptions: {
        enabled: true,         // Enable SW in dev mode too
        type: 'module'
      }
    })
  ],
  server: {
    host: true,   // ← expose to local network (phone access)
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  }
})
