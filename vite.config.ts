import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // import '@/components/...' thay cho đường dẫn tương đối dài
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
