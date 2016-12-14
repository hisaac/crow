crow.controller('DraftsController', ['$http', 'DraftFactory', 'AuthFactory', 'UserFactory', '$location', 'currentAuth', function($http, DraftFactory, AuthFactory, UserFactory, $location, currentAuth){
  if(verbose){console.log( 'DraftsController is running' )};
  var self = this;
  self.draftFactory = DraftFactory;
  self.userFactory = UserFactory
  self.authFactory = AuthFactory;
  
  self.userDrafts = [];

  self.userFactory.uid = currentAuth.providerData[0].uid;

  getDrafts();

  self.draftToFactory = function(clickedDraft){
    self.draftFactory._id = clickedDraft._id;
    self.draftFactory.text = clickedDraft.text;
    self.draftFactory.dateCreated = clickedDraft.dateCreated;
  };

  function getDrafts(){
    $http.get('/db/getDrafts/' + self.userFactory.uid)
      .then(function(res){
        self.userDrafts = res.data;
      });
  };

}]);
