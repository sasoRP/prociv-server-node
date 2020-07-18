const express = require('express');
const bodyParser = require('body-parser');

const controllers = require('./controllers');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', controllers.getIndex);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
