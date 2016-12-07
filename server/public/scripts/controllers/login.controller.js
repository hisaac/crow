crow.controller('LoginController', ['$http', '$firebaseAuth', 'AuthFactory', function($http, $firebaseAuth, AuthFactory){
  if(verbose){console.log( 'LoginController is running' )};

  var self = this;
  var auth = $firebaseAuth();
  self.factory = AuthFactory;

  self.logIn = function(){
    auth.$signInWithPopup('twitter').then(function(firebaseUser) {
      self.factory.userAuthInfo = firebaseUser;
    }).catch(function(error) {
      console.log('Authentication failed: ', error);
    });
  };

}]);
