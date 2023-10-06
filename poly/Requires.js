const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const poly = require('./Routes/poly');
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/poly', poly);
   


module.exports = app;