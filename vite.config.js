import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/devc_portafolio/' : '/',
  server: {
    port: 3000,
    host: true,
  },
  plugins: [react(), svgr()],
}));
