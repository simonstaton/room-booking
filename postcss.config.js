const path = require('path');
const breakpointsJson = require('./tokens/breakpoints.json');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-media-generator': breakpointsJson,
    'postcss-flexbugs-fixes': {},
    'postcss-nested': {},
    'postcss-preset-env': {
      autoprefixer: {
        grid: true,
      },
    },
    cssnano:
      process.env.NODE_ENV === 'production'
        ? {
            preset: 'default',
          }
        : false,
  },
};
