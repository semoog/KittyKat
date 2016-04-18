angular.module('kittyApp')
  .controller('masterController', function ($scope, $rootScope, $firebaseArray, fbService, fb) {


    //Gets all the users in the firebase suervice
    var stuff = fbService.getAllUsers();

    $scope.id = "-KFeasI5hiTYyx6RsD7e";

    //Binds the data (stuff) to the scope with three-way binding under $scope.data
    //Any changes made to the $scope.data will automagically sync
    stuff.$bindTo($scope, 'data').then(function(){

        console.log('This is done');


    });

console.log('test');

$scope.addCoins = function (numCoins) {
  var currentCoins = parseInt($scope.data[$scope.id].coins);
  console.log(currentCoins);
  $scope.data[$scope.id].coins = currentCoins + numCoins; //test 3 way binding?wait
  console.log($scope.data[$scope.id].coins);
  $scope.data.$save();
};


  //   var auth = $firebaseAuth(ref);
  // // login with Facebook
  // auth.$authWithOAuthPopup("facebook").then(function(authData) {
  //   console.log("Logged in as:", authData.uid);
  // }).catch(function(error) {
  //   console.log("Authentication failed:", error);
  // });


    // $scope.addCoins = function(coinsNum) {
    //   $scope.data.user[0].coins += coinsNum;
    //   $scope.data.user.$save(0);
    // };
    //
    // $scope.addCoins(300);

    // i just started adding firebase so its a mess
  });
