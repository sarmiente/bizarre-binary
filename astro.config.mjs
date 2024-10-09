
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify"
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import simpleStackForm from "simple-stack-form";

// https://astro.build/config
export default defineConfig({
  site: "https://sarpindevs.netlify.app/",
  integrations: [
    mdx(),
    icon(),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    
    simpleStackForm(),
  ],
  output: "hybrid",
  adapter: netlify()
});
