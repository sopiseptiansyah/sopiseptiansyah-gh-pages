import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  base: './sopiseptiansyah-gh-pages/',
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@libs': path.resolve(__dirname, 'src/libs/'),
    },
  },
})
