crow.controller('LoginController', ['$http', '$location', '$firebaseAuth', 'AuthFactory', 'UserFactory', 'currentAuth', function($http, $location, $firebaseAuth, AuthFactory, UserFactory, currentAuth){
  if(verbose){console.log( 'LoginController is running' )};

  var self = this;
  var auth = $firebaseAuth();
  self.factory = UserFactory;

  if(currentAuth){
    $location.path('/drafts');
  }

  self.logIn = function(){
    auth.$signInWithPopup('twitter')
      // move firebase data into factory
      .then(function(firebaseUser){
        self.factory.uid          = firebaseUser.user.providerData[0].uid;
        self.factory.displayName  = firebaseUser.user.providerData[0].displayName;
        self.factory.photoURL     = firebaseUser.user.providerData[0].photoURL;
        self.factory.email        = firebaseUser.user.providerData[0].email;
        self.factory.accessToken  = firebaseUser.credential.accessToken;
        self.factory.secret       = firebaseUser.credential.secret;
      })
      // get info from twitter
      .then(function(){
        $http.get('/twitter/getInfo/' + self.factory.uid)
          .then(function(res){
            self.factory.username = res.data;
            writeToDb();
            $location.path('/drafts');
          });
      })
      // redirect user to drafts page after login
      .catch(function(error){
        console.log('Authentication failed: ', error);
      });
  };

// writes data to database
function writeToDb(){
  $http.post('/db/createUser', self.factory);
};

}]);
