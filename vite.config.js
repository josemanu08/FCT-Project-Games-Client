import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v2': 'https://xbl.io',
      '/psn-api': 'http://localhost:4000',
      '/api': 'https://www.giantbomb.com'
    }
  }
})
