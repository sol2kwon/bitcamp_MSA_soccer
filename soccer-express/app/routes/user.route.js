const { Router } = require('express');
const express =  require('express');
const userRouter = express.Router()

userRouter.use(function user(req, res, next) {
    console.log('@@@사용자 서버@@@');
    next();
});
module.exports = userRouter;