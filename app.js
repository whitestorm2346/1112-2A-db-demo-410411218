var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const dotenv = require('dotenv');
dotenv.config();

const db = require('./utils/database');
// const testDB = require('./utils/test-db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const crownRouter = require('./routes/crown_18');
const crownRouter2 = require('./routes/crown2_18');

const apiRouter = require('./routes/api/crown2_18');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/crown_18', crownRouter);
app.use('/crown2_18', crownRouter2);

app.use('/api/crown2_18', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
