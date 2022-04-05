const { Router } = require('express');
const express =  require('express');
const gameRouter = express.Router()

gameRouter.use(function game(req, res, next) {
    console.log('@@@게임서버@@@');
    next();
});
module.exports = gameRouter;