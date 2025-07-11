import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
// @ts-nocheck
import { defineConfig, type Plugin } from 'vitest/config'

export default defineConfig({
  plugins: [vue() as Plugin<any>],
  test: {
    environment: 'happy-dom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
