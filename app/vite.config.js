import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Sitemap({ generateRobotsTxt: true, base: 'https://mariafurtadobravo.com', sitemap: 'sitemap.xml' })],
})
