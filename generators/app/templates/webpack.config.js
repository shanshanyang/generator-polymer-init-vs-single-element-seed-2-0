var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: [`./js/index.js`],

  resolve: {
    extensions: [``, `.js`]
  },

  module: {
    loaders: [
      {
        loader: `babel`,
        test: /\.js$/,
        exclude: /(node_modules)/,
        query: {
          presets: [`latest`],
          plugins: [`transform-runtime`],
          cacheDirectory: true
        }
      }, {
        test: /\.css$/,
        loader: `style!css`
      }, {
        test: /\.scss$/,
        loader: `style!css!sass`
      }, {
        test: /\.png|\.jpg|\.gif|\.svg$/,
        loader: `url-loader?limit=1000000`
      }
    ]
  },

  plugins: [
    new BrowserSyncPlugin(
      // BrowserSync options 
      {
        // browse to http://localhost:3000/ during development 
        host: 'localhost',
        port: 3000,
        // proxy the Polymer Dev Server endpoint 
        // (which should be serving on http://localhost:8080/) 
        // through BrowserSync 
        proxy: 'http://localhost:8080/'
      },
      // plugin options 
      {
        // prevent BrowserSync from reloading the page 
        // and let Webpack Dev Server take care of this 
        reload: false
      }
    )
  ],

  devtool: `source-map`,
  output: {
    path: `${process.cwd()}/`,
    filename: `<%= elementName %>.js`
  }
};