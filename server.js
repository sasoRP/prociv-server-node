const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const controllers = require('./controllers');
const app = express();
const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once('open', function () {
    console.log('MongoDB database connection established successfully');
});

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', controllers.getIndex);

app.get('/fetchAll', controllers.fetchAll);

app.get('/all', controllers.getAllOccurrences);

app.get('/distrito/:distritoID', controllers.getOccurrencesByDistrito);

app.get('/concelho/:concelhoID', controllers.getOccurrencesByConcelho);

app.get('/freguesia/:freguesiaID', controllers.getOccurrencesByFreguesia);

app.get('/natureza/:codigo', controllers.getOccurrencesByCode);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
