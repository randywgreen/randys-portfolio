import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  preview: {
    port: 8888,
    strictPort: true,
   },
   server: {
    port: 8888,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8888",
   },
});
