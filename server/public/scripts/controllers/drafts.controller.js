crow.controller('DraftsController', ['$http', 'DraftFactory', 'AuthFactory', '$location', function($http, DraftFactory, AuthFactory, $location){
  if(verbose){console.log( 'DraftsController is running' )};
  var self = this;
  self.draftFactory = DraftFactory;
  self.authFactory = AuthFactory;

  self.userDrafts = [];

  getDrafts();

  function getDrafts(userData){
    $http.get('/db/getDrafts/' + self.authFactory.uid)
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
