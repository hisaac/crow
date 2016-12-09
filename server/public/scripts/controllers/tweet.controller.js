crow.controller('TweetController', ['$http', 'AuthFactory', function($http, AuthFactory){
  if(verbose){console.log( 'TweetController is running' )};
  var self = this;
  self.factory = AuthFactory;

  self.tweetText = '';

  self.postTweet = function(){
    if(verbose){console.log( 'entered post tweet function' )};

    $http.post('/postTweet/' + self.tweetText);
      // .then()
  };

}]);
