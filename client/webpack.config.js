const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const webpack = require('webpack');


module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: true,
        requestTimeout: 1
      }),
      // Add and configure workbox plugins for a service worker and manifest file.
      // Webpack plugin that generates our html file and injects our bundles. 
      new HtmlWebpackPlugin({
        template: './index.html', 
        title: 'Education Marketplace',
      }),
      // Injects our custom service worker
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),
      // Creates a manifest.json file.
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Education Marketplace',
        short_name: 'UniVersIty',
        description: 'Empower Educators, Enable Learners',
        // background_color: '#225ca3',
        // theme_color: '#225ca3',
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('public/images/logos/logo.svg'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),                  
    ],

    module: {
      rules: [
        {
          test: /\.css$/i, // 
          use: ['style-loader', 'css-loader']
        },        
      ],
    },
    optimization: {
      minimize: false,
    },
  };
};
