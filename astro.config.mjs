// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://heatingrepairmooresvillenc.us',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
