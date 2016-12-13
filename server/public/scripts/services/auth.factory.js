crow.factory('AuthFactory', [function() {
  console.log( 'Auth Factory running' );

  var userAuthInfo = {
    uid: '804356294559854592',
    username: 'hisaac0',
    displayName: null,
    photoURL: 'http://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png',
    email: null,
    accessToken: '804356294559854592-CNDjNsVz6hKYWKaqLOtQO4CmXKXCEY8',
    secret: 'WLtAy1Ajmmnskmib9kVe0MTT5VxWGLblcy2hKXjWam3qn'
  };
  
  return userAuthInfo;
}]);
