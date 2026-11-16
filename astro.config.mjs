// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tokn-ai.dev',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', { path: 'cn', codes: ['zh-CN'] }],
    routing: { prefixDefaultLocale: false },
  },
});
