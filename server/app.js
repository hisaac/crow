//----------------------------------------------------------------------------//

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var databaseUri = 'mongodb://localhost:27017/crow'

//----------------------- MONGOOSE CONNECTION HANDLING -----------------------//

mongoose.connect(databaseUri);

mongoose.connection.on('connected', function() {
  console.log('mongoose connected to ', databaseUri);
});

mongoose.connection.on('error', function(error) {
  console.log('mongoose connection error: ', error);
});

//---------------------------------- ROUTES ----------------------------------//

//---------------------------------- SETUP -----------------------------------//

app.use(bodyParser.json());
app.use(express.static('./server/public'));
app.listen(3000);

//----------------------------------------------------------------------------//
