import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  build: {
    env: {
      PUBLIC_USERNAME: process.env.PUBLIC_USERNAME || "Unknown",
    },
  },
});
