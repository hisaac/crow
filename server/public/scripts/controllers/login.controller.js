crow.controller('LoginController', ['$http', '$location', '$firebaseAuth', 'AuthFactory', 'UserFactory', 'currentAuth', function($http, $location, $firebaseAuth, AuthFactory, UserFactory, currentAuth){
  if(verbose){console.log( 'LoginController is running' )};

  var self = this;
  var auth = $firebaseAuth();
  self.userFactory = UserFactory;
  
  auth.$onAuthStateChanged(function(firebaseUser){
    if(firebaseUser){
      firebaseUser.providerData[0].uid
    }
  });

  /*
  is currentAuth present?
    YES: is currentAuth.uid in the database?
      YES:
        1. ask twitter for rest of info
          ERROR: redirect to login page
        2. write new data to the database
        3. move data into factory
      NO: redirect to login page
    NO: redirect to login page
  */

  // checkLogin();

  // function checkLogin(){
    
  // };

  // if(currentAuth){
  //   checkDb(currentAuth.providerData[0].uid);
  // } else {
    // presentLogin()
// }
  
  // checkDb(currentAuth.providerData[0].uid);
  //   if (responseStatus === 200){
  //     console.log(responseStatus);
  //     console.log('the user exists');
  //   } else {
  //     console.log(responseStatus);
  //     console.log('the user does not exist');
  //   }
  // };

  // if(currentAuth){
  //   checkDb(currentAuth.providerData[0].uid);
  //   getUserData(currentAuth.providerData[0].uid);
  //   // check if the uid is present in the database
  //   // if yes {
  //     // get twitter data
  //     // write data to database
  //     // route to drafts page
  //   // } else {
  //     // force login prompt
  //   // }
  // } else {
  //   // force login prompt
  // }

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

  // gets user data from Twitter and writes it to the factory
  function getUserData(uid){
    $http.get('/twitter/getInfo/' + uid)
      .then(function(res){
        // write data to the factory
      })
  };

  function checkDb(uid){
    $http.get('/db/checkdb/' + uid)
      .then(function(res){
        return res.status;
      })
  };

}]);
