crow.controller('LoginController', ['$http', '$firebaseAuth', function($http, $firebaseAuth){
  if(verbose){console.log( 'LoginController is running' )};

  var self = this;
  var auth = $firebaseAuth();

  self.logIn = function(){
    auth.$signInWithPopup('twitter').then(function(firebaseUser) {
      console.log('Firebase User: ', firebaseUser.user);
      console.log('User access token: ', firebaseUser.credential.accessToken);
      console.log('User secret: ', firebaseUser.credential.secret);
    }).catch(function(error) {
      console.log('Authentication failed: ', error);
    });
  };

}]);
