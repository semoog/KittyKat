angular.module('kittyApp')
    .controller('shopController', function($scope, $rootScope, $firebaseArray, fbService, shop) {

        fbService.getShop().then(function(response) {
            $scope.shop = response;
        });

        $scope.buyItem = function(item) {
            if (item.price > $rootScope.user.coins) {
                //    doNothing
            } else {
                /// buy the item
                $rootScope.user.inventory.push(item);
                $rootScope.user.coins = $rootScope.currentCoins - item.price;
                $rootScope.user.$save();
                $rootScope.currentCoins = $rootScope.user.coins;

            }
        };


    });
