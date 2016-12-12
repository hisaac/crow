crow.controller('TweetController', ['$http', 'AuthFactory', function($http, AuthFactory){
  if(verbose){console.log( 'TweetController is running' )};
  var self = this;
  self.factory = AuthFactory;

  self.tweetText = '';

  self.postTweet = function(){
    if(verbose){console.log( 'entered post tweet function' )};

    $http.post('/twitter/postTweet/' + self.tweetText, self.factory)
      .then(function(res){
        console.log(res);
      });
  };

  self.saveDraft = function(){
    if(verbose){console.log( 'entered save draft function' )};

    $http.post('/db/draft/' + self.tweetText, self.factory)
      .then(function(res){
        console.log('response from server: ', res);
      });

  };

}]);

/*
-- useful variables from twitter:

res.data.created_at: date posted string
res.data.id_str: tweet id string
res.data.retweet_count: number
res.data.favorite_count: number

*/