crow.factory("AuthFactory", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);
