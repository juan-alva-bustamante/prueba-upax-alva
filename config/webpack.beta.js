const path = require("path");
const webpack = require("webpack");
const packageJson = require("../package.json");
const { BannerPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = "beta";

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
      "process.env.REACT_APP_ENV": JSON.stringify("beta"),
      "process.env.PROJECT_TYPE": JSON.stringify("CONTAINER"),
    }),
    new MiniCssExtractPlugin(),
    // Injectar versión en banner
    new BannerPlugin({
      banner: `/*! Version: ${packageJson.version} */`,
      raw: true, // que deje el comentario tal cual
      entryOnly: false, // que aplique a todos los chunks
      test: /remoteEntry\.js$/, // solo al archivo remoteEntry.js
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
