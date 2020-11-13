/**
 *  competition controller
 *  Handles requests related to competitions (see routes)
 *
 */
const LOG = require('../util/logger');

const db = require('../models/index')();

// FUNCTIONS TO RESPOND WITH JSON DATA  ----------------------------------------

// GET all JSON
exports.findAll = async (req, res) => {
  (await db).models.Competition.findAll()
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
    (await db).models.Competition.findByPk(id)
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
      context.models.Competition.create(req.body);
    } catch (err) {
      // store the user inputs & the validation errors in res.locals.competition
      // err includes err.message & err.errors (array of validator msgs)
      LOG.error('ERROR SAVING COMPETITION');
      const item = {};
      item.competitionname = req.body.competitionname;
      item.startdate = req.body.startdate;
      item.starttime = req.body.starttime;
      item.errors = err.errors;
      res.locals.competition = item;
      LOG.info(` ERROR ADDING COMPETITION:${item}`);
    }
    return res.redirect('/competition');
  };
  // POST /save/:id
exports.saveEdit = async (req, res) => {
    try {
      const reqId = parseInt(req.params.id, 10);
      LOG.info(`Save id: ${reqId}`);
      // don't use super-current language features unless you add babel
      const updated = (await db).models.Competition.update(req.body, {
        where: { id: reqId },
      });
      LOG.info(`Updated: ${updated}`);
      return res.redirect('/competition'); // always redirect back for now
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };
  
  // POST /delete/:id
  exports.deleteItem = async (req, res) => {
    try {
      const reqId = parseInt(req.params.id, 10);
      const deleted = (await db).models.Competition.destroy({
        where: { id: reqId },
      });
      if (deleted) {
        return res.redirect('/competition');
      }
      throw new Error(`${reqId} not found`);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };
  
  