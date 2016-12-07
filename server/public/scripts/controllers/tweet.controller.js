crow.controller('TweetController', ['$http', function($http){
  if(verbose){console.log( 'TweetController is running' )};
  var self = this;

  self.tweetText = '';

  // need to url encode the text, and just send it as the url. so easy!
  // formatted as: https://api.twitter.com/1.1/statuses/update.json?status=hello+cruel+world

}]);
