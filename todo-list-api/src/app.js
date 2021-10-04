var createError = require('http-errors');
var express = require('express');
var helmet = require('helmet');
var path = require('path');
var logger = require('morgan');

/*
  Require
*/
var indexRouter = require('./routes/index.routes');
var usersRouter = require('./routes/users.routes');
var ticketsRouter = require('./routes/tickets.routes');
var authRouting = require('./routes/auth.routes');
var { initialSetups } = require('./libs/initialSetup');

/*
 * Docs
 */
const ui = require('swagger-ui-express');
const swagger = require('swagger-jsdoc');
const swaggerOptions = require('./swaggerOptions');
const cssOptions = require('./options');
const specs = swagger(swaggerOptions);

/*
 *  initials
 */
var app = express();
const db = require('./database/database');
initialSetups();
/*
  Middleware
*/

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*  
  Routing
*/

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/tickets', ticketsRouter);
app.use('/api/auth', authRouting);
app.use('/docs', ui.serve, ui.setup(specs, cssOptions));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
