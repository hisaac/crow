crow.factory('AuthFactory', [function() {
  console.log( 'Auth Factory running' );

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

//---- returned data looks like this:
//
// userAuthInfo {
//   credential {
//     accessToken: "string of characters",
//     provider: "twitter.com",
//     secret: "string of characters"
//   },
//   user {
//     displayName: "user's display name",
//     …
//   }
// }
