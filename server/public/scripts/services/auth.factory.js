crow.factory('AuthFactory', [function() {
  console.log('Auth Factory running');
  var userAuthInfo = {};
  return userAuthInfo;
}]);

// returned data

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
