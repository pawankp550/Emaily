const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'https://5000-f8e88e3a-fd85-4353-b650-818de919cfb0.ws-ap0.gitpod.io' }));
};
