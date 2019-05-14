/* jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config');
const app = express();

const jsonParser = bodyParser.json();

const router = require('./router.js');

app.use('/', jsonParser, router);

// start the server in the port 3000 !
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}.`);
});

module.exports = {app};