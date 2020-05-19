const express = require('express');

const routes = express.Router();

const RemediosController = require('./controllers/RemedioController');

routes.post('/remedios', RemediosController.create);
routes.get('/remedios', RemediosController.index);
routes.get('/search', RemediosController.indexByname);
routes.post('/xlsx', RemediosController.sheet);

module.exports = routes;