import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: './index.html',
                privacy: './privacy.html',
                publicOffer: './public-oferta.html',
            }
        }
    }
});
