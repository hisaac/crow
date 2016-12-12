crow.factory('DraftFactory', [function() {
  console.log( 'Draft Factory running' );

  var currentDraftInfo = {
    _id: null,
    text: null,
    dateCreated: null
  };
  
  return currentDraftInfo;
}]);
