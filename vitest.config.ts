import { defineConfig } from 'vitest/config';

// https://cn.vitest.dev/guide/
export default defineConfig({
  test: {
    environment: 'happy-dom',
    include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    coverage: {
      include: ['src/**/*.ts'],
      exclude: ['**/index.ts', '**/*.d.ts'],
    },
  },
});
