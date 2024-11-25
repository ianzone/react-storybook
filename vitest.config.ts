import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

// https://cn.vitest.dev/guide/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
    },
  }),
);
