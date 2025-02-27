import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
    plugins: [],
    optimizeDeps: {
        exclude: ['lit', 'lit-html'],
    },
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: [
                    "global-builtin",
                    "mixed-decls"
                ]
            }
        }
    },
})
