const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const int = require('./Routes/int');
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/int', int);
   


module.exports = app;