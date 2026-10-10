import { defineConfig } from 'vite'
import react from '@vitejs/react-vite'

export default defineConfig({
    plugins: [react()],
    base: '/', // Ensures the app builds relative to the root of your custom domain
})