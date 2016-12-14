crow.controller('HeaderController', ['AuthFactory', function(AuthFactory){
  if(verbose){console.log( 'Header Controller is running' );}
  var self = this;
  self.factory = AuthFactory;
}]);