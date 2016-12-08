crow.controller('TweetController', ['$http', 'AuthFactory', function($http, AuthFactory){
  if(verbose){console.log( 'TweetController is running' )};
  var self = this;
  self.factory = AuthFactory;

  self.tweetText = '';

  self.postTweet = function(){
    if(verbose){console.log( 'entered post tweet function' )};

    $http.post('/postTweet');
      // .then()
  };

  // need to url encode the text, and just send it as the url. so easy!
  // formatted as: https://api.twitter.com/1.1/statuses/update.json?status=hello+cruel+world

}]);
