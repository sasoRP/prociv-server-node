const express = require('express');
const bodyParser = require('body-parser');

const controllers = require('./controllers');
const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', controllers.getIndex);

app.get('/fetchAll', controllers.fetchAll);

app.get('/all', controllers.getAllOccurrences);

app.get('/distrito/:distritoID', controllers.getOccurrencesByDistrito);

app.get('/concelho/:concelhoID', controllers.getOccurrencesByConcelho);

app.get('/freguesia/:freguesiaID', controllers.getOccurrencesByFreguesia);

app.get('/natureza/:codigo', controllers.getOccurrencesByCode);

module.exports = app;
