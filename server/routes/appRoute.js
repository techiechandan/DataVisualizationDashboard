const express = require('express');
// controller
const appController = require('../controllers/appController');

const Router = express.Router();
Router.get('/',appController.dashboard);
Router.get('/insert-data',appController.insertData);

module.exports = Router; 