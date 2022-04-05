const { Router } = require('express');
const express =  require('express');
const adminRouter = express.Router()

adminRouter.use(function admin(req, res, next) {
    console.log('@@@관리자서버@@@');
    next();
});
module.exports = adminRouter;
