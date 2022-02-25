/* eslint-disable comma-dangle */
// const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

// const htmlWebpackPlugin = new HtmlWebPackPlugin({
//   template: './src/index.html',
//   filename: './index.html'
// });

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  // devServer: {
  //   static: {
  //     directory: DIST_DIR,
  //   },
  //   port: 3000,
  //   open: true,
  //   liveReload: true,
  // },
  resolve: { extensions: ['.js', '.jsx'] },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              ['@babel/plugin-transform-runtime',
                {
                  regenerator: true
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
