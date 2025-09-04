const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = "prod";

const prodConfig = {
  mode: "production",
  devServer: {
    port: 3002,
    historyApiFallback: {
      index: "index.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(
        require("dotenv").config({ path: `.env.${env}` }).parsed,
      ),
      "process.env.REACT_APP_ENV": JSON.stringify("prod"),
      "process.env.PROJECT_TYPE": JSON.stringify("CONTAINER"),
    }),
    new MiniCssExtractPlugin(),
  ],
};

module.exports = merge(commonConfig, prodConfig);
