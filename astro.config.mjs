// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://suburhoney.netlify.app',
  server: { port: 5182 },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'ms'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});