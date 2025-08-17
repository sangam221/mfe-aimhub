const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:3001/",
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