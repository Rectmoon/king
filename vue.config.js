const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },

  publicPath: '/',

  assetsDir: 'static',

  lintOnSave: true,

  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },

  productionSourceMap: true

  // devServer: {
  //   proxy: "localhost:3000"
  // }
}
