import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({

  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      external: ['@safe-globalThis/safe-core-sdk', '@safe-globalThis/safe-ethers-adapters', '@safe-globalThis/safe-ethers-lib'],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    },
  },

  plugins: [react()],
  define: {
    global: "globalThis",
    "process.env": {},
  },
});