const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'remote',

  exposes: {
    './CardModule': './src/app/components/card/card.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

/* moduleFederationConfig.output.publicPath = "http://localhost:4201/";
module.exports = moduleFederationConfig; */
