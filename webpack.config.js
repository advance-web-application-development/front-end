const webpackMerge = require("webpack-merge");
const commonConfig = require("./config/webpack.common.config");

const configs = {
  dev: require("./config/webpack.dev.config"),
  prod: require("./config/webpack.prod.config"),
};

const config = (env) => {
  if (env.config) {
    const config = webpackMerge.merge(commonConfig, configs[env.config]);
    return config;
  }

  return commonConfig;
};

module.exports = config;