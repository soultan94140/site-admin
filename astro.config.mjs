import { defineConfig } from "astro/config";
import keystatic from "@keystatic/astro";

import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [keystatic(), react()],
  output: "server",
  adapter: vercel(),
});

