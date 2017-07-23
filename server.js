var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// var apiRouter = require('./routes/apiRouter');
var appRouter = require('./routes/appRouter');
var apiRouter = require('./routes/apiRouter');
var path = require('path');

app.use(bodyParser.urlencoded({
    extended: true
}));
////////////
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    next();
});
///////

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

// app.use('/api', apiRouter);
app.use('/', appRouter);
app.use('/api', apiRouter);

app.listen(3000, function () {
    console.log('connected to port 3000');
});
