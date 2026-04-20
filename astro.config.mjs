import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project page settings
// Site: https://weighsone.github.io/kiwibins-site
// Base: /kiwibins-site
export default defineConfig({
  site: 'https://weighsone.github.io/kiwibins-site',
  base: '/kiwibins-site',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  build: {
    // Ensure trailing slashes are consistent
    format: 'directory',
  },
  trailingSlash: 'always',
});
