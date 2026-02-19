// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://jessica-lizano.cofoundy.dev',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
