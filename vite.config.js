import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginElementPlus from 'vite-plugin-element-plus'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePluginElementPlus({
      // 如果你需要使用 [component name].scss 源文件，你需要把下面的注释取消掉。
      // 对于所有的 API 你可以参考 https://github.com/element-plus/vite-plugin-element-plus
      // 的文档注释
      useSource: true,
      format: process.env.NODE_ENV === 'development' ? 'esm' : 'cjs'
    })
  ],
  // 指定传递给 CSS 预处理器的选项
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`
      }
    }
  },
  server: {
    proxy: {
      '/o': {
        target: 'http://apidev.bangbangtown.cn',
        changeOrigin: true
      }
    }
  },
  build: {
    target: 'modules',
    chunkSizeWarningLimit: 1500
  }
})
