crow.controller('NavController', ['$http', '$location', 'AuthFactory', 'DraftFactory', 'UserFactory', function($http, $location, AuthFactory, DraftFactory, UserFactory){
  if(verbose){console.log('nav controller is running');}
  var self = this;
  self.authFactory = AuthFactory;
  self.userFactory = UserFactory;
  self.draftFactory = DraftFactory;

  self.createBlankDraft = function(){

    $http.post('/db/draft/newBlank', self.userFactory)
      .then(function(res){
        // move info from newly created blank draft into draft factory
        self.draftFactory._id = res.data._id;
        self.draftFactory.text = res.data.text;
        self.draftFactory.dateCreated = res.data.dateCreated;
      })
      .then(function(){
        $location.path('/tweet');
      });
  };

}]);
