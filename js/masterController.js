angular.module('kittyApp')
    .controller('masterController', function($scope, $rootScope, $firebaseArray, fbService, fb) {


        //Gets all the users in the firebase service
        $rootScope.user = fbService.getAllUsers();
        $rootScope.shop = fbService.getShop();

        console.log("RootScope User?", $rootScope.user);
        var fbRef = new Firebase(fb.url);

        var shopRef = fbRef.child("shop");


        $rootScope.id = 0;

        // The hackiest solution I can think of
        setTimeout(function() {
            if ($rootScope.user[$rootScope.id]) {
                $rootScope.currentCoins = parseInt($rootScope.user[$rootScope.id].coins);
            }
            $scope.$apply();
        }, 5000);



        $rootScope.addCoins = function(numCoins) {
            if ($rootScope.user[$rootScope.id] && !$rootScope.currentCoins) {
                $rootScope.currentCoins = parseInt($rootScope.user[$rootScope.id].coins);
            }
            $rootScope.user[$rootScope.id].coins = $rootScope.currentCoins + numCoins; //test 3 way binding?wait
            $rootScope.user.$save($rootScope.id);
        };

        $rootScope.addShopItem = function() {

            fbRef.child("shop").child("laserpointer").set({
                name: 'Laser Pointer',
                price: 1000,
                type: 'toy',
                img: 'https://www.iconexperience.com/_img/g_collection_png/standard/512x512/laser_pointer.png',
                increase: 75
            });
        };

        $rootScope.removeCoins = function(numCoins) {
            if ($rootScope.user[$rootScope.id] && !$rootScope.currentCoins) {
                $rootScope.currentCoins = parseInt($rootScope.user[$rootScope.id].coins);
            }

            $rootScope.user[$rootScope.id].coins = $rootScope.currentCoins - numCoins; //test 3 way binding?wait
            $rootScope.user.$save($rootScope.id);
        };



        //   var auth = $firebaseAuth(ref);
        // // login with Facebook
        // auth.$authWithOAuthPopup("facebook").then(function(authData) {
        //   console.log("Logged in as:", authData.uid);
        // }).catch(function(error) {
        //   console.log("Authentication failed:", error);
        // });

    });
