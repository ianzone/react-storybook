// https://vite.dev/config/
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: ['src/index.ts'],
      cssFileName: 'index',
    },
    rollupOptions: {
      external: (id) => {
        // 匹配 'react', 'react/jsx-runtime', 'react-dom' 等
        return /^react(-dom)?(\/.*)?$/.test(id);
      },
      output: [
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
        },
        {
          format: 'iife',
          dir: 'dist',
          name: 'MyReactLib',
          entryFileNames: 'index.iife.js',
          extend: true,
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      ],
    },
  },
});
