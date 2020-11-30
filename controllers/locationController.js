/**
 *  Location controller
 *  Handles requests related to Locations (see routes)
 *
 * @author Denise Case <dcase@nwmissouri.edu>
 */
const LOG = require('../util/logger');

const db = require('../models/index')();

// FUNCTIONS TO RESPOND WITH JSON DATA  ----------------------------------------

// GET all JSON
exports.findAll = async (req, res) => {
  (await db).models.Location.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error retrieving all.',
      });
    });
};

// GET one JSON by ID
exports.findOne = async (req, res) => {
  const { id } = req.params;
  (await db).models.Location.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving item with id=${id}: ${err.message}`,
      });
    });
};

// HANDLE EXECUTE DATA MODIFICATION REQUESTS -----------------------------------

// POST /save
exports.saveNew = async (req, res) => {
  // create behaves poorly
  const context = await db;
  try {
    context.models.Location.create(req.body);
  } catch (err) {
    // store the user inputs & the validation errors in res.locals.location
    // err includes err.message & err.errors (array of validator msgs)
    LOG.error('ERROR SAVING LOCATION');
    const item = {};
    item.locationId = req.body.locationId;
    item.questId = req.body.questId;
    item.locationLatitude = req.body.locationLatitude;
    item.locationLongitude=req.body.locationLongitude;
    item.locationValue=req.body.locationValue;
    item.errors = err.errors;
    res.locals.location = item;
    LOG.info(` ERROR ADDING LOCATION:${item}`);
  }
  return res.redirect('/location');
};

// POST /save/:id
exports.saveEdit = async (req, res) => {
  try {
    const reqId = parseInt(req.params.id, 10);
    LOG.info(`Save id: ${reqId}`);
    // don't use super-current language features unless you add babel
    const updated = (await db).models.Location.update(req.body, {
      where: { id: reqId },
    });
    LOG.info(`Updated: ${updated}`);
    return res.redirect('/location'); // always redirect back for now
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// POST /delete/:id
exports.deleteItem = async (req, res) => {
  try {
    const reqId = parseInt(req.params.id, 10);
    const deleted = (await db).models.Location.destroy({
      where: { id: reqId },
    });
    if (deleted) {
      return res.redirect('/location');
    }
    throw new Error(`${reqId} not found`);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// RESPOND WITH VIEWS  --------------------------------------------

// GET to this controller base URI (the default)
exports.showIndex = async (req, res) => {
  (await db).models.Location.findAll()
    .then((data) => {
      res.locals.location = data;
      res.render('location/index.ejs', { title: 'Locations', res });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error retrieving all.',
      });
    });
};

// GET /create
exports.showCreate = async (req, res) => {
  // create a temp location and add it to the response.locals object
  // this will provide a location object to put any validation errors
  const tempItem = {
    locationId: 1,
    questId: 1,
    locationLatitude:23.4,
    locationLongitude:25.8,
    locationValue: 23,
  };
  res.locals.location = tempItem;
  res.render('location/create.ejs', { title: 'Locations', res });
};

// GET /delete/:id
exports.showDelete = async (req, res) => {
  const { id } = req.params;
  (await db).models.Location.findByPk(id)
    .then((data) => {
      res.locals.location = data;
      if (data) {
        res.render('location/delete.ejs', { title: 'Locations', res });
      } else {
        res.redirect('location/');
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving item with id=${id}: ${err.message}`,
      });
    });
};

// GET /details/:id
exports.showDetails = async (req, res) => {
  const { id } = req.params;
  (await db).models.Location.findByPk(id)
    .then((data) => {
      res.locals.location = data;
      res.render('location/details.ejs', { title: 'Locations', res });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving item with id=${id}: ${err.message}`,
      });
    });
};

// GET /edit/:id
exports.showEdit = async (req, res) => {
  const { id } = req.params;
  (await db).models.Location.findByPk(id)
    .then((data) => {
      res.locals.location = data;
      res.render('location/edit.ejs', { title: 'Locations', res });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving item with id=${id}: ${err.message}`,
      });
    });
};
