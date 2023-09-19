import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Vue from '@vitejs/plugin-vue'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import {resolve} from 'path';
// https://vitejs.dev/config/

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

/** 设置别名 */
const alias: Record<string, string> = {
  "@": pathResolve("src"),
  "@build": pathResolve("build")
};

export default defineConfig({
  server: {
    port: 3000,
  },
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
    nodePolyfills({
      protocolImports: true,
    })
  ],
  resolve: {
    alias,
    extensions: ['.js','.ts','.jsx','.tsx','.json','.vue']
  },
})
