import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'stimg',
  plugins: [
    sass()
  ],
  bundles: [
    { components: ['st-img'] }
  ],
  hashFileNames: true,
  hashedFileNameLength: 8,
  outputTargets: [
    {
      type: 'dist'
    },
  ],
  devServer: {
    openBrowser: false
  }
};
