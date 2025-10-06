import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess({
      style: {
        stylus: true
      }
    })
  ],
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: "warn",
    },
    output: {
        bundleStrategy: "inline",
    }
  }
};

export default config;
