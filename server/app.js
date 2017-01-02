//----------------------------------------------------------------------------//
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var databaseUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/crow';
var twitter = require('./modules/twitter.module');
var db = require('./modules/db.module');
require('dotenv').config({path: __dirname + '/.env'});
//----------------------------------------------------------------------------//

//---------------------------------- SETUP -----------------------------------//

app.use(express.static('./server/public'));
app.use(bodyParser.json());

//----------------------- MONGOOSE CONNECTION HANDLING -----------------------//

mongoose.connect(databaseUri);

mongoose.connection.on('connected', function() {
  console.log('mongoose connected to ', databaseUri);
});

mongoose.connection.on('error', function(error) {
  console.log('mongoose connection error: ', error);
});

//----------------------------- ROUTES & MODULES -----------------------------//

app.use('/twitter', twitter);
app.use('/db', db);

//------------------------------- START SERVER -------------------------------//
app.listen(3000);
