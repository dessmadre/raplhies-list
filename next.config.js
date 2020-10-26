const path = require('path')
const withCSS = require('@zeit/next-css')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
});