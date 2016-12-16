crow.controller('NavController', ['$http', '$location', 'AuthFactory', 'DraftFactory', function($http, $location, AuthFactory, DraftFactory){
  if(verbose){console.log('nav controller is running');}
  var self = this;
  self.authFactory = AuthFactory;
  self.draftFactory = DraftFactory;

  self.createBlankDraft = function(){
    if(verbose){console.log( 'entered create blank draft function' )};

    $http.post('/db/draft/newBlank', self.authFactory)
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
