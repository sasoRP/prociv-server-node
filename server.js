const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const controllers = require('./controllers');
const app = express();
const port = 3000;

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', controllers.getIndex);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
