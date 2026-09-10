import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// GitHub Pages project site: https://<user>.github.io/PhotoTalk/
// Override with: VITE_BASE=/your-repo/ npm run build
const base = process.env.VITE_BASE || '/PhotoTalk/'

export default defineConfig({
  base,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        privacyEn: resolve(__dirname, 'privacy-en.html'),
        support: resolve(__dirname, 'support.html'),
      },
    },
  },
})
