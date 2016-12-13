crow.controller('HeaderController', ['UserFactory', function(UserFactory){
  if(verbose){console.log('header controller is running');}
  var self = this;
  self.factory = UserFactory;
}]);