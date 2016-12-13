crow.controller('SettingsController', ['$http', '$firebaseAuth', function($http, $firebaseAuth){
  if(verbose){console.log( 'SettingsController is running' )};

  var self = this;
  var auth = $firebaseAuth();

  self.logOut = function(){
    firebase.auth().signOut().then(function() {
      console.log('user signed out');
    }).catch(function(error){
      console.log('error signing out');
    });
  };

}]);
