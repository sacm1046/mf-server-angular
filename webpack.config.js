const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const config = withModuleFederationPlugin({

  name: 'angular',

  exposes: {
    './ProductsModule': './src/app/microfrontends/products/products.module.ts',
    './CardModule': './src/app/components/card/card.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

config.output.publicPath = 'http://localhost:4201/'

module.exports = config
