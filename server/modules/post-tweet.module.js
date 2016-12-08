//----------------------------------------------------------------------------//
var express = require('express');
var router = express.Router();
var unirest = require('unirest');
//----------------------------------------------------------------------------//

router.post('/', function(req, res){
  console.log('post-tweet.module running');
  res.sendStatus(201);
});

module.exports = router;

// unirest.post('https://api.twitter.com/1.1/statuses/update.json?status=is+this+thing+on')
//   .headers(
//     'OAuth oauth_consumer_key="AvdNGsmLJ2mRNRMeo9gElXVmI", oauth_nonce="4rqsCxWHNurWWvrEqCpOSGWIUtlbfmGS", oauth_signature="9ODaahDsBEuzXDIxRKS670v2DVU%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1481144401", oauth_token="804356294559854592-rmLqCSTzQpTrB0dKMBr2arvrqD0PI1E", oauth_version="1.0"'
//   );
