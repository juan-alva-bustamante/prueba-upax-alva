const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const env = "dev";

const devConfig = {
  mode: "development",
  devServer: {
    port: 3002,
    historyApiFallback: {
      index: "/index.html",
    },
    liveReload: true,
    hot: false,
  },
  module: {
    rules: [
      {
        test: /\.(css)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(
        require("dotenv").config({ path: `.env.${env}` }).parsed || {},
      ),
      "process.env.REACT_APP_ENV": JSON.stringify("dev"),
      "process.env.PROJECT_TYPE": JSON.stringify("CONTAINER"),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
