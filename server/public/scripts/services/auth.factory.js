crow.factory('AuthFactory', [function() {
  if(verbose){console.log( 'Auth Factory running' );}

  var userAuthInfo = {
    uid: null,
    username: null,
    displayName: null,
    photoURL: null,
    email: null,
    accessToken: null,
    secret: null
  };
  
  return userAuthInfo;
}]);
