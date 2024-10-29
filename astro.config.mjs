import { defineConfig } from "astro/config";
import keystatic from "@keystatic/astro";

import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [keystatic(), react()],
  output: "hybrid",
  adapter: netlify(),
});

