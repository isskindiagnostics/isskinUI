import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@isskinui": path.resolve(__dirname, "../lib"),
    },
  },
  server: {
    port: 3000,
  },
});
