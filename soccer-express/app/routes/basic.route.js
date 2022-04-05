const { Router } = require('express');
const express =  require('express');
const basicRouter = express.Router()

basicRouter.use(function basic(req, res, next) {
    console.log('@@@베이직서버@@@');
    next();
});
module.exports = basicRouter;