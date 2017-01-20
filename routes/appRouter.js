var express = require('express');
var path = require('path');
var appRouter = express.Router();

appRouter.get('/',function (req,res) {
    res.sendFile(path.resolve('./index.html'));
});

module.exports = appRouter;
