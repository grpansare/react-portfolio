import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // three.js lives in the lazily loaded HeroScene chunk (~220 kB gzip).
  build: { chunkSizeWarningLimit: 900 },
})