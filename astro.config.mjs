// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Ganti ke domain final saat deploy, mis. 'https://pacitanraw.netlify.app'
  site: 'https://pacitan-raw.example.com',
  build: { format: 'directory' },
});
