/* eslint-disable */
// npx webpack --entry ./source/index.js --output ./public/index_bundle.js
// npx webpack --config webpack.config.js 또는 그냥 npx webpack
// entry 2개 이상 설정 가능한 기능도 있다.
// plugin 사용 시 chunks 옵션도 있다.
// npx webpack --watch -> 파일이 변경될 때마다 실행

const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './source/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 5000,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // 바벨 로더를 추가한다
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './source/index.html',
      filename: './index.html',
    }),
  ],
};
