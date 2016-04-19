angular.module('kittyApp')
  .controller('shopController', function ($scope, $rootScope, $firebaseArray, users, shop) {

// if($rootScope.currentCoins) {
//   $rootScope.currentCoins = parseInt($rootScope.user[$rootScope.id].coins);
// }


//do we even need this? it should see rootscope no?
// but why is it only applying class on click

$scope.buyItem = function(coins) {
  console.log("I Wonder", $rootScope.currentCoins);
  console.log("coins", coins);
};


  });
