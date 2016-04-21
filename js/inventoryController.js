angular.module('kittyApp')
    .controller('inventoryController', function($scope, $rootScope, inventoryService) {

      $scope.selectedIndex = inventoryService.selectedIndex;
      $scope.inventory = inventoryService.inventory;

      $scope.selectItem = function (index) {
        inventoryService.setIndex(index);
        $scope.selectedIndex = index;
      };

      $scope.getInventory = function() {
        $scope.inventory = inventoryService.inventory;
      };

    });
