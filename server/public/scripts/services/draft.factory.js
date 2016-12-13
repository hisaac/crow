crow.factory('DraftFactory', [function() {
  if(verbose){console.log( 'Draft Factory running' );}

  var currentDraftInfo = {
    _id: null,
    text: null,
    dateCreated: null
  };
  
  return currentDraftInfo;
}]);
