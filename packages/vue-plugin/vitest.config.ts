import type { Api } from '@vitejs/plugin-vue'
import type { Plugin } from 'vitest/config'

import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

const vuePlugin = vue() as Plugin<Api>

export default defineConfig({
  plugins: [vuePlugin],
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
