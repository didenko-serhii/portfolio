import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  preview: {
    port: 3000,
    strictPort: true,
    allowedHosts: ['solo-web.studio'],
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    origin: "http://localhost:3000",
  },
})