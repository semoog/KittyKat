angular.module('kittyApp')
    .controller('masterController', function($scope, $rootScope, $firebaseArray, fbService, fb) {


        //Gets all the users in the firebase service
        $scope.user = fbService.getAllUsers();
        // $scope.shop = fbService.getShop();

        var fbRef = new Firebase(fb.url);

        var shopRef = fbRef.child("shop");


        $scope.id = 1;

        $scope.addCoins = function(numCoins) {
            var currentCoins = parseInt($scope.user[$scope.id].coins);
            $scope.user[$scope.id].coins = currentCoins + numCoins; //test 3 way binding?wait
            $scope.user.$save($scope.id);
        };

        $scope.addShopItem = function() {

            fbRef.child("shop").set({
                yarn: {
                    name: 'Yarn',
                    price: 200,
                    type: 'toy',
                    img: 'http://vignette1.wikia.nocookie.net/farmville2/images/a/aa/Super-Fine_Yarn_Ball.png/revision/latest?cb=20130220230859',
                    increase: 50
                }

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
