import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Netlify kay-dir build kay-ya3tih '/', f GH Pages kay-ya3tih '/ILYASS-TARGHOUNT/'
  base: process.env.NETLIFY ? '/' : '/ILYASS-TARGHOUNT/',
})