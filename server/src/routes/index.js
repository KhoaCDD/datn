
const authApiRouter = require('../modules/auth');
const userApiRouter = require('../modules/users');
const unitApiRouter = require('../modules/unit');

const routerManager = (app) => {
    authApiRouter(app);
    userApiRouter(app);
    unitApiRouter(app);
};

module.exports = routerManager;
