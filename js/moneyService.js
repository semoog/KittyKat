angular.module('kittyApp')
.service("moneyService", function($firebaseArray, $firebaseObject, fb, fbService){

  fbService.getShop();

});
