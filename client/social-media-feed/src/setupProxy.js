const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
  app.use(
    createProxyMiddleware('/api/posts',
      {
        target: 'place workers api here...',
        changeOrigin: true
      }
    )
  )
}