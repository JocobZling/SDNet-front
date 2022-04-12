const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/html', {
            target: 'http://22d858i464.51mypc.cn',
            changeOrigin: true,
        }),
        createProxyMiddleware('/api', {
            target: "http://127.0.0.1:8080",
            changeOrigin: true,

        })
    );
};
