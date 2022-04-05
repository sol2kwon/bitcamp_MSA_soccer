const { Router } = require('express');
const express =  require('express');
const todoRouter = express.Router()

todoRouter.use(function todo(req, res, next) {
    console.log('@@@리스트 서버@@@');
    next();
});
module.exports = todoRouter;