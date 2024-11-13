import { resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'; // https://github.com/qmhc/vite-plugin-dts/blob/main/README.zh-CN.md
import { libInjectCss } from 'vite-plugin-lib-inject-css'; // https://victorlillo.dev/blog/react-typescript-vite-component-library#adding-styles

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ rollupTypes: true, tsconfigPath: './tsconfig.app.json' }),
  ],
  build: {
    lib: {
      // https://vite.dev/config/build-options.html#build-lib
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyLib', //NOTE - this is the name of the library
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'react-dom',
        },
      },
    },
  },
});
