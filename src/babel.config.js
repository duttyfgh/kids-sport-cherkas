module.exports = function (api) {
    api.cache(true);
  
    const presets = [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ];
    const plugins = [
      [
        '@babel/plugin-transform-runtime',
        {
          regenerator: true,
        },
      ],
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true,
        },
      ],
      [
        '@babel/plugin-proposal-object-rest-spread',
        {
          useBuiltIns: true,
        },
      ],
      [
        'babel-plugin-inline-import',
        {
          extensions: ['.svg'],
        },
      ],
    ];
  
    return {
      presets,
      plugins,
    };
  };
  