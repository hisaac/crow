//----------------------------------------------------------------------------//
var express = require('express');
var router = express.Router();
var request = require('request');
var Twit = require('twit');
//----------------------------------------------------------------------------//

// post status to twitter
router.post('/postTweet/:tweetText', function(req, res){
  console.log( 'postStatus request running' );

  var T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: req.body.accessToken,
    access_token_secret: req.body.secret,
    timeout_ms: 60*1000
  });

  T.post('statuses/update', { status: req.params.tweetText }, function(err, data, response){
    if(err){
      console.log('Post to twitter error', err);
      res.sendStatus(504);
    } else {
      res.status(201).send(data);
    }
  });

});

// get info from twitter
router.get('/getInfo/:uid', function(req, res){
  
  var T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    app_only_auth: true,
    timeout_ms: 60*1000
  });

  T.get('users/lookup', { user_id: req.params.uid }, function(err, data, response){
    res.status(200).send(data[0].screen_name);
  });

});

module.exports = router;
