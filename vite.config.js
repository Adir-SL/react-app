import { defineConfig, loadEnv } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const API_URL = `${env.API_URL ?? 'http://localhost:8000'}`;

  return {
    plugins: [react()],
    root: "src",
    server: {
        port: 3000,
        host: true,
        open: false,
        watch: {
            usePolling: true
        },
        proxy: {
            '/api': {
                target: API_URL,
                changeOrigin: true,
            }
        }
    }
}});