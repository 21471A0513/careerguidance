const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const csp = require('./Routes/csp');
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/csp', csp);
   


module.exports = app;