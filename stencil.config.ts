import {Config} from '@stencil/core';
import {sass} from '@stencil/sass';

export const config: Config = {
  namespace: 'noorse',
  globalStyle: 'src/global/variables.scss',
  plugins: [
    sass({injectGlobalPaths: [
        'src/global/variables.scss'
      ]})
  ],
  outputTargets: [
    {type: 'dist'},
    {type: 'docs-readme'},
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
