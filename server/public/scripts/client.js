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

crow.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/drafts', {
      templateUrl: '/views/templates/drafts.html',
      controller: 'DraftsController',
      controllerAs: 'drafts'
    })
    .when('/tweet', {
      templateUrl: '/views/templates/tweet.html',
      controller: 'TweetController',
      controllerAs: 'tweet'
    })
    .when('/login', {
      templateUrl: '/views/templates/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })
    .when('/about', {
      templateUrl: '/views/templates/about.html',
      controller: 'AboutController',
      controllerAs: 'about'
    })
    .when('/posts', {
      templateUrl: '/views/templates/posts.html',
      controller: 'PostsController',
      controllerAs: 'posts'
    })
    .when('/settings', {
      templateUrl: '/views/templates/settings.html',
      controller: 'SettingsController',
      controllerAs: 'settings'
    })
    .otherwise({
      redirectTo: 'login'
    });
}]);
