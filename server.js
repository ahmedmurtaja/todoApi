const express = require('express');
const bodyParser = require('body-parser');

const router = require('./router/router')

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(router)

