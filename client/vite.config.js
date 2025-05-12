import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
   build: {
  },
  chunkSizeWarningLimit: 1500, // in kB
  plugins: [react()],
    optimizeDeps: {
    include: ['react-quill'],
  },  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
