crow.controller('LoginController', ['$http', '$location', '$firebaseAuth', 'AuthFactory', 'UserFactory', 'currentAuth', function($http, $location, $firebaseAuth, AuthFactory, UserFactory, currentAuth){
  if(verbose){console.log( 'LoginController is running' )};

  var self = this;
  var auth = $firebaseAuth();
  self.userFactory = UserFactory;

  if(currentAuth){
    self.userFactory.uid = currentAuth.providerData[0].uid;
    getUserData();
  }

  self.logIn = function(){
    auth.$signInWithPopup('twitter')
      // move firebase data into factory
      .then(function(firebaseUser){
        self.userFactory.uid          = firebaseUser.user.providerData[0].uid;
        self.userFactory.displayName  = firebaseUser.user.providerData[0].displayName;
        self.userFactory.photoURL     = firebaseUser.user.providerData[0].photoURL;
        self.userFactory.email        = firebaseUser.user.providerData[0].email;
        self.userFactory.accessToken  = firebaseUser.credential.accessToken;
        self.userFactory.secret       = firebaseUser.credential.secret;
      })
      // get info from twitter
      .then(function(){
        $http.get('/twitter/getInfo/' + self.userFactory.uid)
          .then(function(res){
            self.userFactory.username = res.data.screen_name;
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
  $http.post('/db/createUser', self.userFactory);
};

// gets user data from Twitter and redirects to Drafts page
function getUserData(){
  $http.get('/twitter/getInfo/' + self.userFactory.uid)
      .then(function(res){
        console.log(res.data);
      })
}

}]);
