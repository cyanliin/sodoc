import { defineConfig } from 'vitepress'
import sidebar from './Sidebar'
import nav from './Nav'
import path from 'path'
import { sidebarFormater } from './LayoutHelper'

// Vitepress設定，參考：https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'SoDoc', // 文件名稱
  description: 'A document template by using Vitepress',
  themeConfig: {
    // 主題設定，參考：https://vitepress.dev/reference/default-theme-config
    
    nav, // 右上選單
    sidebar: sidebarFormater(sidebar), // 左側目錄
    outline: { level: [2, 3] }, // 右側選單顯示層級

    search: {
      provider: 'local',
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
  },
  markdown: {},
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'), // 回到專案根目錄的 src 資料夾
      },
    },
  },
})
