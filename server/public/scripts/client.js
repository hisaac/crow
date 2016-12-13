var crow = angular.module('crow', ['ngRoute', 'firebase']);
var verbose = false; // enable for verbose logging in the console

if(verbose){console.log( 'Angular running' )};

// // instantiate FastClick
// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function() {
//     FastClick.attach(document.body);
//     if(verbose){console.log('FastClick running');};
//   }, false);
// }

crow.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/login");
    }
  });
}]);

crow.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/drafts', {
      templateUrl: '/views/templates/drafts.html',
      controller: 'DraftsController',
      controllerAs: 'drafts',
      resolve: {
        "currentAuth": ["AuthFactory", function(AuthFactory){
          return AuthFactory.$requireSignIn();
        }]
      }
    })
    .when('/tweet', {
      templateUrl: '/views/templates/tweet.html',
      controller: 'TweetController',
      controllerAs: 'tweet',
      resolve: {
        "currentAuth": ["AuthFactory", function(AuthFactory){
          return AuthFactory.$requireSignIn();
        }]
      }
    })
    .when('/login', {
      templateUrl: '/views/templates/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })
    .when('/about', {
      templateUrl: '/views/templates/about.html',
      controller: 'AboutController',
      controllerAs: 'about',
      resolve: {
        "currentAuth": ["AuthFactory", function(AuthFactory){
          return AuthFactory.$requireSignIn();
        }]
      }
    })
    .when('/posts', {
      templateUrl: '/views/templates/posts.html',
      controller: 'PostsController',
      controllerAs: 'posts',
      resolve: {
        "currentAuth": ["AuthFactory", function(AuthFactory){
          return AuthFactory.$requireSignIn();
        }]
      }
    })
    .when('/settings', {
      templateUrl: '/views/templates/settings.html',
      controller: 'SettingsController',
      controllerAs: 'settings',
      resolve: {
        "currentAuth": ["AuthFactory", function(AuthFactory){
          return AuthFactory.$requireSignIn();
        }]
      }
    })
    .otherwise({
      redirectTo: 'login'
    });
}]);
