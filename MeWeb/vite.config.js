import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MeWeb/', // 👈 非常关键！告诉 Vite 你的站点路径
  plugins: [react()],
})
