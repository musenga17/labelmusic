const withSass = require("@zeit/next-sass");
module.exports = withSass({
  // add custom webpack config
  webpack(config, options) {
    // this rule is to add support for global scss variables, functions & mixins
    const globalSass = [
      "./scss/abstracts/variables/*",
      "./scss/abstracts/_functions.scss",
      "./scss/abstracts/_mixins.scss",
    ];

    config.module.rules.push({
      enforce: "pre",
      test: /.scss$/,
      loader: "sass-resources-loader",
      options: {
        resources: globalSass,
      },
    });

    config.module.rules.push({
      test: /\.png|jpg|gif|svg|woff|woff2|eot|ttf$/,
      loader: "url-loader",
      options: {
        esModule: false
      }
    })

    return config;
  },
});