import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Injecting main.scss file globally
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '/src/styles/main.scss';`
      }
    }
  }
})
