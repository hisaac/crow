//----------------------------------------------------------------------------//
var express = require('express');
var router = express.Router();
var request = require('request');
var Twit = require('twit');
//----------------------------------------------------------------------------//

router.post('/:tweetText', function(req, res){
  console.log( 'post-tweet.module running' );

  var T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.TEST_USER_KEY,
    access_token_secret: process.env.TEST_USER_SECRET,
    timeout_ms: 60*1000
  });

  T.post('statuses/update', { status: req.params.tweetText }, function(err, data, response){
    console.log('you did it');
  });

  res.sendStatus(201);
});

module.exports = router;
