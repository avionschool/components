const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["webpack/hot/dev-server.js", "./src/index.ts"],
  devtool: "source-map",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /node_modules\/react-dom/,
        use: ['react-hot-loader/webpack', 'babel-loader']
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', ".tsx"],
    alias: {
      '@components': path.resolve(__dirname, "./src/components"),
      '@constants': path.resolve(__dirname, "./src/constants"),
      '@providers': path.resolve(__dirname, "./src/utils/providers"),
      '@api': path.resolve(__dirname, "./src/api"),
      '@services': path.resolve(__dirname, "./src/api/services"),
    }
  },
  devServer: {
    port: 3001,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
  plugins: [new HtmlWebpackPlugin({
    template: "public/index.html",
    hash: true, // cache busting
    filename: '../dist/index.html'
  }),
  new webpack.HotModuleReplacementPlugin()]
}
