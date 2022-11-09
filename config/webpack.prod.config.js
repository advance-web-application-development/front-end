const webpack = require("webpack");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const config = {
  mode: "production",
  performance: {
    maxEntrypointSize: 2500000,
    maxAssetSize: 2500000,
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
};

module.exports = config;
