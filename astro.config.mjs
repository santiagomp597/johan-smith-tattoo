// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind'; // Asegúrate de importar tailwind también

export default defineConfig({
  integrations: [react(), tailwind()]
});