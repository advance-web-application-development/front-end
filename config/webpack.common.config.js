const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const JscramblerWebpack = require("jscrambler-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

const { rootResolve } = require("./paths");

dotenv.config({ path: "./.env" });

const config = {
  entry: {
    app: "./src/app.tsx",
  },
  output: {
    filename: "js/[name].bundle.js",
    path: rootResolve("build"), // base path where to send compiled assets
    publicPath: "/", // base path where referenced files will be look for
  },
  resolve: {
    extensions: ["*", ".js", ".jsx",".ts", ".tsx"],
    alias: {
      "@": rootResolve("src"), // shortcut to reference src folder from anywhere
      "@@": rootResolve("."),
    },
    preferAbsolute: true,
  },
  module: {
    rules: [
      {
        // config for es6 jsx
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        // config for sass compilation
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        // config for images
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
        ],
      },
      {
        // config for fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // plugin for inserting scripts into html
      template: "./public/index.html",
      filename: "index.html",
      title: "Template",
    }),
    new MiniCssExtractPlugin({
      // plugin for controlling how compiled css will be outputted and named
      filename: " css/[name].css",
      chunkFilename: "css/[id].css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "css/*.*",
        "js/*.*",
        "fonts/*.*",
        "images/*.*",
      ],
    }),
    new JscramblerWebpack({
      enable: true, // optional, defaults to true
      chunks: ["protected"], // optional, defaults to all chunks
      params: [],
      applicationTypes: {},
      // and other jscrambler configurations
    }),
    new ESLintPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};

module.exports = config;
