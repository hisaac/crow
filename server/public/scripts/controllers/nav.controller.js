crow.controller('NavController', ['$http', 'AuthFactory', function($http, AuthFactory){
  console.log('nav controller is running');
  var self = this;
  self.factory = AuthFactory;

  self.createBlankDraft = function(){
    if(verbose){console.log( 'entered create blank draft function' )};

    $http.post('/db/draft/newBlank', self.factory)
      .then(function(res){
        console.log('response from server: ', res);
      });
  };

}]);