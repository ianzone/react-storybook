import type { GlobalConfig } from 'semantic-release';

// https://semantic-release.gitbook.io/semantic-release/usage/configuration
const config: GlobalConfig = {
  repositoryUrl: 'https://github.com/ianzone/react-storybook',
  tagFormat: 'v${version}',
  branches: ['release'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};

export default config;
