const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? "/react-a11y" : "",
};

module.exports = withCSS(withSass());
