import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

//import node from "@astrojs/node";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare()
});