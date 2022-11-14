const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const port = process.env.PORT || 3000;

module.exports = {
  // Webpack configuration goes here
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      // First Rule
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
        resolve: {
          extensions: ["", ".js", ".jsx"]
        }
      },

      // Second Rule
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new ESLintPlugin()
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true
  }
};
