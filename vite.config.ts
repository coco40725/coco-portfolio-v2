import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {PrimeVueResolver} from "@primevue/auto-import-resolver";
import Components from 'unplugin-vue-components/vite';
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      // 指定组件位置，默认是src/components
      dirs: ['src/components', 'src/page'],
      // 遞迴搜索子目錄
      deep: true,
      // 生成的文件名
      dts: 'src/components.d.ts',
      resolvers: [
        PrimeVueResolver(),
      ]})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  base: './',
})
