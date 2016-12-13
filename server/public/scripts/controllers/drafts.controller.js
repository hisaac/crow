crow.controller('DraftsController', ['$http', 'DraftFactory', 'AuthFactory', 'UserFactory', '$location', 'currentAuth', function($http, DraftFactory, AuthFactory, UserFactory, $location, currentAuth){
  if(verbose){console.log( 'DraftsController is running' )};
  var self = this;
  self.draftFactory = DraftFactory;
  self.userFactory = UserFactory
  self.authFactory = AuthFactory;

  self.userDrafts = [];

  console.log(currentAuth);

  getDrafts();

  function getDrafts(userData){
    $http.get('/db/getDrafts/' + self.userFactory.uid)
      .then(function(res){
        self.userDrafts = res.data;
      });
  };

  self.draftToFactory = function(clickedDraft){
    self.draftFactory._id = clickedDraft._id;
    self.draftFactory.text = clickedDraft.text;
    self.draftFactory.dateCreated = clickedDraft.dateCreated;
  };

}]);
