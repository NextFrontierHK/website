import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update `site` with your domain when you have it to enable absolute URLs.
export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  integrations: [tailwind({ applyBaseStyles: false })],
  site: 'https://private.nextfrontier.hk',
});
