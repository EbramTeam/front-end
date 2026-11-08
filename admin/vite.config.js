import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // الخادم لا يسمح بطلبات localhost عبر CORS، فنمررها من Vite أثناء التطوير
    proxy: {
      '/api': { target: 'https://ibram.apps.taqat.academy', changeOrigin: true },
    },
  },
});
