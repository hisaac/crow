crow.controller('LoginController', ['$http', '$location', '$firebaseAuth', 'AuthFactory', function($http, $location, $firebaseAuth, AuthFactory){
  if(verbose){console.log( 'LoginController is running' )};

  var self = this;
  var auth = $firebaseAuth();
  self.factory = AuthFactory;

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
            console.log('get username');
            self.factory.username = res.data;
            console.log('user info:', self.factory);
            writeToDb();
          });
      })
      // redirect user to drafts page after login
      .then(function(){
        $location.path('/drafts');
      })
      .catch(function(error){
        console.log('Authentication failed: ', error);
      });
  };

// writes data to database
function writeToDb(){
  $http.post('/db/createUser', self.factory);
  console.log('write to database');
};

}]);
