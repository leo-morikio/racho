import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Plugins: React (JSX) e Tailwind (gera o CSS a partir das classes usadas)
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
