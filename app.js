var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const requireDir = require('require-dir');
const cors = require('cors');
var appRoutes = require('./routes/app');
var mongoose = require('mongoose');
var app = express();
// app.use(express.json());
app.use(cors());



mongoose.connect('mongodb://localhost:27017/api-messages', { useUnifiedTopology: true, useNewUrlParser: true,useCreateIndex:true }).then(() => console.log("MongoDB foi conectado com sucesso")).catch((err)=>console.log('Erro ao tentar realizar a conection',err))

app.use('/files',express.static(path.resolve(__dirname,'./tmp/upload')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
