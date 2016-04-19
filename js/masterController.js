angular.module('kittyApp')
    .controller('masterController', function($scope, $rootScope, $firebaseArray, fbService, fb) {


        //Gets all the users in the firebase service
        $scope.user = fbService.getAllUsers();
        // $scope.shop = fbService.getShop();

        var fbRef = new Firebase(fb.url);

        var shopRef = fbRef.child("shop");


        $scope.id = 0;

        $scope.addCoins = function(numCoins) {
            var currentCoins = parseInt($scope.user[$scope.id].coins);
            $scope.user[$scope.id].coins = currentCoins + numCoins; //test 3 way binding?wait
            $scope.user.$save($scope.id);
        };

        $scope.addShopItem = function() {

            fbRef.child("shop").child("catnip").set({
                    name: 'Catnip',
                    price: 800,
                    type: 'toy',
                    img: 'http://cdn.shopify.com/s/files/1/0657/0831/products/Green-Sm-PillBottle650_1024x1024.png?v=1450461845',
                    increase: 100
            });
        };

        $scope.removeCoins = function(numCoins) {
            var currentCoins = parseInt($scope.user[$scope.id].coins);
            $scope.user[$scope.id].coins = currentCoins - numCoins; //test 3 way binding?wait
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
