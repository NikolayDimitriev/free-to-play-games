import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/api": path.resolve(__dirname, "./src/api"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/services": path.resolve(__dirname, "./src/services"),
      "@/store": path.resolve(__dirname, "./src/store"),
      "@/styles": path.resolve(__dirname, "./src/styles"),
      "@/typing": path.resolve(__dirname, "./src/typing"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/src": path.resolve(__dirname, "./src"),
    },
  },
});
