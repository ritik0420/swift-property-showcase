import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "https://seafood-painted-tin-approaches.trycloudflare.com ",
    ],
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Use Vite's default output directory "dist" so platforms like Vercel
  // can automatically detect the build output.
  // (If you ever need a custom directory again, you can re‑enable this.)
  // build: {
  //   outDir: "build",
  // },
}));
