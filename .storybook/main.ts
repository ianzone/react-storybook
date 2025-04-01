import type { StorybookConfig } from 'storybook-react-rsbuild';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    // https://storybook.js.org/addons
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-rslib',
  ],

  webpackAddons: [
    {
      name: '@storybook/addon-coverage',
      options: {
        istanbul: {
          include: ['src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
          exclude: [],
        },
      },
    },
  ],

  framework: {
    name: 'storybook-react-rsbuild',
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
