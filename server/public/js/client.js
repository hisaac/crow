var app = angular.module('crow', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/drafts', {
      templateUrl: '/views/templates/drafts.html',
      controller: 'DraftsController'
    })
    .when('/tweet', {
      templateUrl: '/views/templates/tweet.html',
      controller: 'TweetController'
    })
    .when('/login', {
      templateUrl: '/views/templates/login.html',
      controller: 'LoginController'
    })
    .when('/about', {
      templateUrl: '/views/templates/about.html',
      controller: 'AboutController'
    })
    .when('/posts', {
      templateUrl: '/views/templates/posts.html',
      controller: 'PostsController'
    })
    .when('/settings', {
      templateUrl: '/views/templates/settings.html',
      controller: 'SettingsController'
    })
    .otherwise({
      redirectTo: 'DraftsController'
    });
}]);