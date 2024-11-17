import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-vite/', // Lägg till detta! Byt ut mot ditt repository-namn
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://win24-assignment.azurewebsites.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
