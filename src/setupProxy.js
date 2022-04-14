const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/html', {
            target: 'http://22d858i464.51mypc.cn',
            changeOrigin: true,
        }),
        createProxyMiddleware('/api', {
            target: "http://chenlab2.vip.aeert.com",
            changeOrigin: true,
        }),

    );
};
