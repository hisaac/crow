crow.controller('DraftsController', [function(){

}]);

colorBlocks.controller('SettingsController', ['$scope','DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");

  var self = this;
  self.factory = DataFactory;

  self.handleInput = function(clickedColor) {
    console.log('current colors', self.factory.colors);
    console.log('You clicked ', clickedColor);
    self.factory.colors.push(clickedColor);
    console.log('now colors', self.factory.colors);
  };

}]);
