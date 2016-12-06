crow.controller('SettingsController', ['$http', '$firebaseAuth', function($http, $firebaseAuth){
  if(verbose){console.log( 'SettingsController is running' )};

  var self = this;
  var auth = $firebaseAuth();

  self.logOut = function(){
    auth.$signOut().then(function(){
      
      console.log('Logging the user out!');
    });
  };

}]);
