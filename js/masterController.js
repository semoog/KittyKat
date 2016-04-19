angular.module('kittyApp')
    .controller('masterController', function($scope, $rootScope, $firebaseArray, fbService, fb) {


        //Gets all the users in the firebase service
        fbService.getAllUsers().then(function(response) {
            $rootScope.user = response;
            $rootScope.currentCoins = parseInt($rootScope.user[$rootScope.id].coins);
        });

        fbService.getShop().then(function(response) {
            $rootScope.shop = response;
        });

        var fbRef = new Firebase(fb.url);

        var shopRef = fbRef.child("shop");

        $scope.gitHubLogin = function() {
            fbRef.authWithOAuthPopup("github", function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                    $rootScope.gitHubUid = authData.auth.uid;
                    $(".loader").fadeOut("slow");
                    $rootScope.createUser($rootScope.gitHubUid);
                }
            });
        };


        $rootScope.id = 0;

        $rootScope.createUser = function(uid) {

            fbRef.child("user").child(uid).set({
                coins: 0,
                inventory: ['null'],
                uid: uid
            });
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

        $rootScope.addCoins = function(numCoins) {
            // if ($rootScope.user[$rootScope.id] && !$rootScope.currentCoins) {
            $rootScope.currentCoins = parseInt($rootScope.user[$rootScope.id].coins);
            // }
            $rootScope.user[$rootScope.id].coins = $rootScope.currentCoins + numCoins; //test 3 way binding?wait
            $rootScope.user.$save($rootScope.id);
        };

        $rootScope.removeCoins = function(numCoins) {
            // if ($rootScope.user[$rootScope.id] && !$rootScope.currentCoins) {
            $rootScope.currentCoins = parseInt($rootScope.user[$rootScope.id].coins);
            // }

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
