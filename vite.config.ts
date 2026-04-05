import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import Pages from "vite-plugin-pages";
import { nitro } from "nitro/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const port = Number(env.PORT || 5000);

  return {
    plugins: [
      react(),
      tailwindcss(),
      Pages({ dirs: ["app/pages"] }),
      nitro(),
    ],
    server: {
      port,
    },
    preview: {
      port,
    },
    resolve: {
      tsconfigPaths: true,
    },
  };
});
