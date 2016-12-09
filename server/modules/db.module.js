//----------------------------------------------------------------------------//
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user.model');
var Draft = require('../models/draft.model');
var Post = require('../models/post.model');
//----------------------------------------------------------------------------//

// post data from firebase to the database
router.post('/createUser', function(req, res){
  var query = { uid: req.body.uid };
  var update = {
    displayName: req.body.displayName,
    photoURL: req.body.photoURL,
    email: req.body.email
  };
  var options = {upsert: true, new: true, setDefaultsOnInsert: true };

  User.findOneAndUpdate(query, update, options, function(error, result){
    if (error) return;
  });
});

module.exports = router;
