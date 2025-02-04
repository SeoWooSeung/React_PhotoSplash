import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/React_PhotoSplash/',
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
            '@recoil': fileURLToPath(new URL('./src/recoil', import.meta.url)),
            '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
            '@apis': fileURLToPath(new URL('./src/apis', import.meta.url)),
        },
    },
    build: {
        rollupOptions: {
            output: {
                entryFileNames: '[name].[hash].js',
                assetFileNames: '[name].[hash].[ext]',
            },
        },
    },

    // css 전역 사용
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "src/assets/styles/main.scss";`,
            },
        },
    },
});
