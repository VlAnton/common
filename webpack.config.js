const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: "./src/main.js",
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader', 'vue-style-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.(svg|png|jpg)/,
        loader: 'file-loader',
        options: {
          name: "[name].[hash].[ext]"
        }
      }
    ]
  },
  devServer: {
    port: 4200,
    contentBase: path.join(__dirname, "dist")
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
  ],
};
