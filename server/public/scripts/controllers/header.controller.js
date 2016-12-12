crow.controller('HeaderController', ['AuthFactory', function(AuthFactory){
  console.log('header controller is running');
  var self = this;
  self.factory = AuthFactory;
}]);