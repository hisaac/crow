crow.factory('AuthFactory', [function() {
  if(verbose){console.log( 'Auth Factory running' );}

  var userAuthInfo = {
    uid: '804356294559854592',
    username: 'hisaac0',
    displayName: null,
    photoURL: 'http://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png',
    email: null,
    accessToken: null,
    secret: null
  };
  
  return userAuthInfo;
}]);
