module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/victor-mono/'
    : '/',
  devServer: {
    compress: true,
    disableHostCheck: true
  }
}
