import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import Pages from "vite-plugin-pages";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Pages({ dirs: ["app/pages"] }),
    nitro(),
  ],
  resolve: {
    tsconfigPaths: true
  }
});
