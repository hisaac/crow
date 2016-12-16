crow.controller('SettingsController', ['$http', '$firebaseAuth', '$location', function($http, $firebaseAuth, $location){
  if(verbose){console.log( 'SettingsController is running' )};

  var self = this;
  var auth = $firebaseAuth();

  self.logOut = function(){
    firebase.auth().signOut()
      .then(function() {
        $location.path('/');
        console.log('user signed out');
      })
      .catch(function(error){
        console.log('error signing out');
      });
  };

}]);
