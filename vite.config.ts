import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig(({
  command
}) => {
  const config = {
    base: '/',
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
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
          404: path.resolve(__dirname, "public/404.html"),
        },
      },
    },
  }

  if (command !== 'serve') {
    config.base = '/sopiseptiansyah-gh-pages/'
  }

  return config
})