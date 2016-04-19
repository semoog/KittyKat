angular.module('kittyApp')
  .controller('shopController', function ($scope, $rootScope, $firebaseArray, fbService, users, shop) {


    $scope.users = users;
    $scope.shop = shop;
    console.log($scope.users);

    $scope.id = 0;

    console.log("test", $scope.users[0]);

    setTimeout(function () {
      $scope.currentCoins = parseInt($scope.users[$scope.id].coins);
    }, 1500);


  });
