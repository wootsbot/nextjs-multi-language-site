const path = require("path");
const withStyles = require("@webdeb/next-styles");

module.exports = withStyles({
  sass: true,
  modules: true,
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-us', 'fr-fr'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-us',
  },
});