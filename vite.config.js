import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [sveltekit(), tailwindcss()],
    resolve: {
        alias: {
            $components: '/src/components',
        },
    },
    server: {
        watch: {
            include: ["src/lib/**/**/"]
        },
        cors: true,
        warmup: {
            clientFiles: ['./src/lib/**', './src/routes/+page.svelte'],
        }
    },
    build: {
        assetsInlineLimit: 16384,
    }
});
