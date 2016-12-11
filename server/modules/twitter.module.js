//----------------------------------------------------------------------------//
var express = require('express');
var router = express.Router();
var request = require('request');
var Twit = require('twit');
//----------------------------------------------------------------------------//

// post status to twitter
router.post('/postStatus', function(req, res){
  console.log( 'postStatus request running' );

  var T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: 'not sure yet where to get this from',
    access_token_secret: 'not sure yet where to get this from',
    timeout_ms: 60*1000
  });

  T.post('statuses/update', { status: req.params.tweetText }, function(err, data, response){
    if(err){
      console.log('Post to twitter error', err);
      res.sendStatus(504);
    } else {
      console.log('you posted ' + req.params.tweetText + 'to Twitter!');
      res.sendStatus(201);
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
