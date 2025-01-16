// https://vitepress.dev/guide/custom-theme
import './style.scss'
import DefaultTheme from 'vitepress/theme' // 預設的主題
import Layout from './Layout.vue';

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
  },
}
