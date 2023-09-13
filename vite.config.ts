import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Vue from '@vitejs/plugin-vue'

import {resolve} from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  // ...
  plugins: [
    // ...
    Vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname,'src')
    },
    extensions: ['.js','.ts','.jsx','.tsx','.json','.vue']
  },
  css: {
    preprocessorOptions: {

    }
  }
})
