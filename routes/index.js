/**
 * @index.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @author Denise Case <dcase@nwmissouri.edu>
 * @requires express
 */

const express = require('express');

const router = express.Router();

// Manage top-level request first

const appTitle = 'Hunt-Game5';
const appSubTitle = 'Gaming App';
const playerRoutes = require('./player.routes');


/* GET home page. */
router.get('/', (req, res) => {
  res.render('index.ejs', { title: appTitle, subTitle: appSubTitle });
});

router.get('/index', (req, res) => {
  res.render('index.ejs', { title: appTitle, subTitle: appSubTitle });
});


module.exports = router;
