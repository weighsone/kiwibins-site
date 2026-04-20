import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://weighsone.github.io/kiwibins-site',
  base: '/kiwibins-site',
  integrations: [
    tailwind(),
  ],
  build: {
    format: 'directory',
  },
  trailingSlash: 'always',
});
