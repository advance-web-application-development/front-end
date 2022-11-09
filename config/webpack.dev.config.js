const webpack = require("webpack");

const config = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // contentBase: path.join(__dirname, './'), // where dev server will look for static files, not compiled
    open: true,
    port: 8000,
    hot: true,
    historyApiFallback: true,
  },
};

module.exports = config;
