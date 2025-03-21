import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react()],
    server: {
        port: 3000,
        watch: {
            usePolling: true,
        },
        strictPort: true,
        host: true,
        origin: 'http://0.0.0.0:3000',
    },
})
