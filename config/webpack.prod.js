const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
const packageJson = require("../package.json");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/aimhub/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "aimhub",
      filename: "remoteEntry.js",
      exposes: {
        "./AIMHubApp": "./src/App", // Adjust as needed
      },
      shared: packageJson.dependencies,
    }),
  ],
});