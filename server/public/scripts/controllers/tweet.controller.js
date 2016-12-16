crow.controller('TweetController', ['$http', 'AuthFactory', 'DraftFactory', '$location', function($http, AuthFactory, DraftFactory, $location){
  if(verbose){console.log( 'TweetController is running' )};
  var self = this;
  self.authFactory = AuthFactory;
  self.draftFactory = DraftFactory;

  self.postTweet = function(){
    if(verbose){console.log( 'entered post tweet function' )};

    $http.post('/twitter/postTweet/' + self.draftFactory.text, self.authFactory)
      .then(function(res){
        $location.path('/drafts');
      });
  };

  self.saveDraft = function(){
    if(verbose){console.log( 'entered save draft function' )};
    $http.post('/db/draft/saveDraft/' + self.draftFactory.text, self.draftFactory)
      .then(function(res){
        $location.path('/drafts');
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