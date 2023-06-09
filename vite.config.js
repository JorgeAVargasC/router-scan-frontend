/* eslint-disable no-undef */
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src/'),
      '@/contexts': path.resolve(__dirname, './src/contexts/'),
      '@/components': path.resolve(__dirname, './src/components/'),
      '@/config': path.resolve(__dirname, './src/config/'),
      '@/hooks': path.resolve(__dirname, './src/hooks/'),
      '@/layouts': path.resolve(__dirname, './src/layouts/'),
      '@/routes': path.resolve(__dirname, './src/routes/'),
      '@/services': path.resolve(__dirname, './src/services/'),
      '@/pages': path.resolve(__dirname, './src/pages/'),
      '@/utils': path.resolve(__dirname, './src/utils/'),
      '@/images': path.resolve(__dirname, './src/assets/images/'),
      '@/docs': path.resolve(__dirname, './src/assets/docs/'),
      '@/icons': path.resolve(__dirname, './src/assets/icons/'),
      '@/logos': path.resolve(__dirname, './src/assets/logos/'),
      '@/videos': path.resolve(__dirname, './src/assets/videos/'),
      '@/data': path.resolve(__dirname, './src/data/'),
      https: 'agent-base',
    },
  },
  plugins: [react()],
  server: {
    host: true,
  },
})
