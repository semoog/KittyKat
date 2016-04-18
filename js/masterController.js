angular.module('kittyApp')
  .controller('masterController', function ($scope, $rootScope, $firebaseArray, fbService, fb) {


    //Gets all the users in the firebase suervice
    $scope.user = fbService.getAllUsers();
    $scope.shop = fbService.getShop();


    $scope.id = 1;

    //Binds the data (stuff) to the scope with three-way binding under $scope.data
    //Any changes made to the $scope.data will automagically sync
    // stuff.$bindTo($scope, 'data');

// console.log($scope.stuff[1]);

$scope.addCoins = function (numCoins) {
  var currentCoins = parseInt($scope.user[$scope.id].coins);
  console.log(currentCoins);
  $scope.user[$scope.id].coins = currentCoins + numCoins; //test 3 way binding?wait
  console.log($scope.user[$scope.id].coins);
  $scope.user.$save($scope.id);
};


  //   var auth = $firebaseAuth(ref);
  // // login with Facebook
  // auth.$authWithOAuthPopup("facebook").then(function(authData) {
  //   console.log("Logged in as:", authData.uid);
  // }).catch(function(error) {
  //   console.log("Authentication failed:", error);
  // });

  });
