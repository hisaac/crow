crow.controller('LoginController', ['$http', '$firebaseAuth', 'AuthFactory', function($http, $firebaseAuth, AuthFactory){
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
      .then(function(){
        $http.get('/twitter/getInfo/' + self.factory.uid)
          .then(function(res){
            console.log('get username');
            self.factory.username = res.data;
            console.log('user info:', self.factory);
          });
      })
      .then(function(){
        console.log('create user in database');
        $http.post('/db/createUser', self.factory);
      })
      .catch(function(error){
        console.log('Authentication failed: ', error);
      });
  };

}]);

// $location
