import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// GitHub Pages: defina VITE_BASE_PATH=/nome-do-repo/ no workflow ou .env
const base = process.env.VITE_BASE_PATH || './';

export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Aether Quest',
        short_name: 'Aether',
        description: 'MMORPG solo com IA — campanha A Queda do Rei de Aether',
        theme_color: '#0d0a14',
        background_color: '#0d0a14',
        display: 'standalone',
        orientation: 'portrait',
        start_url: base === './' ? './' : base,
        icons: [
          {
            src: 'favicon.svg',
            sizes: '128x128',
            type: 'image/svg+xml',
            purpose: 'any',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      },
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
