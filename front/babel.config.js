/* eslint-disable */
module.exports = function (api) {
  api.cache(true);

  const plugins = [
    '@babel/plugin-transform-block-scoping',
    '@babel/plugin-transform-arrow-functions',
  ];

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: 11,
        },
        useBuiltIns: 'usage',
        corejs: '3',
        modules: false,
      },
    ],
  ];

  return {
    plugins,
    presets,
  };
};
