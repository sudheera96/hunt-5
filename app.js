/**
 *  The main program for our web app.
 *
 * @author Denise Case <dcase@nwmissouri.edu>
 */

// import default dependencies
const createError = require('http-errors');
const express = require('express');
const path = require('path'); // builds path strings
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// import additional dependencies
const engines = require('consolidate');
const expressLayouts = require('express-ejs-layouts');
const helmet = require('helmet'); // safer http headers
global.passport = require('passport');
const compression = require('compression'); // smaller=faster
const favicon = require('serve-favicon');
const LOG = require('./util/logger');

// app variables
const isProduction = process.env.NODE_ENV === 'production';
LOG.info('Environment isProduction = ', isProduction);

// create an Express app
const app = express();
LOG.info('app created');

// view engine(s) setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', engines.ejs);

// set up other middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use(expressLayouts);
app.use(compression()); // compress all routes
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// set up user authentication (logging in & admin)
app.use(global.passport.initialize());
app.use(global.passport.session());

LOG.info('app initial middleware configured');

// route most requests to the indexRouter
// route requests that start with /users to the usersRouter
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

LOG.info('app default routes configured');

// Dr. Case - Team
try {
  app.use('/team', require('./routes/team.routes'));
} catch (err) {
  LOG.error(`ERROR: ${err.message}`);
}

//Competition
try {
  app.use('/competition', require('./routes/competition.routes'));
} catch (err) {
  LOG.error(`ERROR: ${err.message}`);
}

// Dr. Hoot - tea
app.use('/tea', require('./routes/tea.routes'));

// Blake - game
try {
  app.use('/game', require('./routes/game.routes'));
} catch (err) {
  LOG.error(`ERROR: ${err.message}`);
}

// Varsha - animal
app.use('/animal', require('./routes/animal.routes'));

// Felipe - ?

// Jack - chief

// Sreenidhi - plant
app.use('/plant', require('./routes/plant.routes'));

// Sri Vasavi - food
app.use('/food', require('./routes/food.routes'));
// Joseph - software
app.use('/software', require('./routes/software.routes'));
// Stephen - whiskey
try {
  app.use('/whiskey', require('./routes/whiskey.routes'));
} catch (err) {
  LOG.error(`ERROR: ${err.message}`);
}

// Shivani - book
app.use('/book', require('./routes/book.routes'));

// Kunal - videoGame
try {
  app.use('/videogame', require('./routes/videogame.routes'));
} catch (err) {
  LOG.error(`ERROR: ${err.message}`);
}
// Chandler - company
app.use('/company', require('./routes/company.routes'));

// Praneeth - cricket
app.use('/cricket', require('./routes/cricket.routes'));
// Nithya - series
app.use('/series', require('./routes/series.routes'));

// Zach - fruit
try {
  app.use('/fruit', require('./routes/fruit.routes'));
} catch (err) {
  LOG.error(`ERROR: ${err.message}`);
}

// Sam - ship
try {
  app.use('/ship', require('./routes/ship.routes'));
} catch (err) {
  LOG.error(`ERROR: ${err.message}`);
}

// Prashansa - dance
try {
  app.use('/dance', require('./routes/dance.routes'));
} catch (err) {
  LOG.error(`ERROR: ${err.message}`);
}

LOG.info('app custom routes configured');

// catch 404 and forward to error handler
app.use((req, res, err, next) => {
  LOG.error('App 404 Error Status: ', err.status);
  next(createError(404));
});

// error handler from
// https://github.com/mdn/express-locallibrary-tutorial/blob/master/app.js
app.use((err, req, res) => {
  LOG.error('App All Error Status: ', err.status);
  LOG.error('App All Error Message: ', err.message);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// export the express app (helpful for testing)
module.exports = app;
