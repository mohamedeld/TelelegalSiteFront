import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',
        https: {
            key: fs.readFileSync(path.resolve(__dirname, './certs/cert.key')),
            cert: fs.readFileSync(path.resolve(__dirname, './certs/cert.crt'))
          },
        proxy: {
          '/socket.io/': {
            target: 'https://localhost:8080',
            changeOrigin: true,
            secure: false,
            ws: true,
          },
        },
        port:5173
      },
  plugins: [react()],
})
