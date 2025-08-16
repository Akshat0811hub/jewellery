import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // ✅ network pe expose
    port: 5173,        // ✅ same port hamesha use hoga
  },
})
