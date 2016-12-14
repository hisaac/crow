//----------------------------------------------------------------------------//
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user.model');
var Draft = require('../models/draft.model');
var Post = require('../models/post.model');
//----------------------------------------------------------------------------//

// post user data from firebase to the database
router.post('/createUser', function(req, res){
  var query = { uid: req.body.uid };
  var update = {
    username: req.body.username,
    displayName: req.body.displayName,
    photoURL: req.body.photoURL,
    email: req.body.email,
    accessToken: req.body.accessToken,
    secret: req.body.secret
  };
  var options = { upsert: true, new: true, setDefaultsOnInsert: true };

  User.findOneAndUpdate(query, update, options, function(error, result){
    if(error){
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

// create new blank draft
router.post('/draft/newBlank', function(req, res){
  User.findOne({ uid: req.body.uid }, function(error, user){
    user.drafts.push(new Draft);
    if(error){
      res.sendStatus(500);
    } else {
      user.save();
      res.status(201).send(user.drafts[user.drafts.length-1]);
    }
  });
});

// post draft data to the database
router.post('/draft/saveDraft/:tweetText', function(req, res){
  var query = { 'drafts._id': req.body._id };
  var update = { 'drafts.$.text': req.params.tweetText };
  var options = { upsert: true, new: true, setDefaultsOnInsert: true };

  User.findOneAndUpdate(query, update, options, function(error, result){
    if(error){
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

router.get('/getDrafts/:uid', function(req, res){
  User.findOne({ uid: req.params.uid }, function(error, result){
    if(error){
      res.sendStatus(500);
    } else {
      res.send(result.drafts);
    }
  });
});

module.exports = router;


// User.findOneAndUpdate(
//   {
//     '_id': "5846d71b5de4b846897b0529",
//     'books._id': req.params.book_id
//   },
//   {
//     $set:
//       {
//         'books.$.page_at' : req.body.updatedPageNumber
//       }
//   }