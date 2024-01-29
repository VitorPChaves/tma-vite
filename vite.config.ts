import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  base: ((process.env.GITHUB_REPOSITORY ?? "") + "/").match(/(\/.*)/)?.[1],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
