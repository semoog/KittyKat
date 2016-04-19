angular.module('kittyApp')
  .controller('shopController', function ($scope, $rootScope, fbService) {

    $scope.shop = fbService.getShop();

  });
