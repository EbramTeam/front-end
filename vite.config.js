import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    // الخادم لا يسمح بطلبات localhost عبر CORS، فنمررها من Vite أثناء التطوير
    proxy: {
      '/api': { target: 'http://ibram.apps.taqat.academy', changeOrigin: true },
    },
  },
})
