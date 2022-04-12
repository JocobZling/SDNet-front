const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/payapi',
        proxy({
            target: 'http://22d858i464.51mypc.cn/html',
            changeOrigin: true,
        })
    );
};