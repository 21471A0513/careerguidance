const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const course1 = require('./Routes/course1');
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/course1', course1);
   


module.exports = app;