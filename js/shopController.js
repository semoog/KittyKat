angular.module('kittyApp')
    .controller('shopController', function($scope, $rootScope, $firebaseArray, fbService, shop) {

        fbService.getShop().then(function(response) {
            $scope.shop = response;
        });

        $scope.buyItem = function(item) {
            if (item.price > $rootScope.user.coins) {
                $('.shop-modal-failure').fadeTo('slow', 1, function(){});

                setTimeout(function () {
                  $('.shop-modal-failure').fadeOut('slow');
                }, 1200);
            } else {
                $('.shop-modal-success').fadeTo('slow', 1, function(){});

                setTimeout(function () {
                  $('.shop-modal-success').fadeOut('slow');
                }, 1200);
                $rootScope.user.inventory.push(item);
                $rootScope.user.coins = $rootScope.currentCoins - item.price;
                $rootScope.user.$save();
                $rootScope.currentCoins = $rootScope.user.coins;

            }
        };


    });
