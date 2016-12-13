crow.factory('UserFactory', [function() {
  if(verbose){console.log( 'User factory running' );}

  var userInfo = {
    uid: null,
    username: null,
    displayName: null,
    photoURL: null,
    email: null,
    accessToken: null,
    secret: null
  };
  
  return userInfo;
}]);
