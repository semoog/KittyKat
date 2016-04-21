angular.module('kittyApp')
    .controller('masterController', function($scope, $state, $rootScope, $firebaseArray, $firebaseObject, fbService, fb, inventoryService) {

        /* */
        $scope.goToRouteAndOpenModal = function(route) {
          $state.go(route).then(value => {
            // $('.ui-view').toggle("slide", {
            //     direction: "up"
            // }, 300);
            $('.ui-view').fadeToggle('fast', function() {

            });
          });
        };




        //call back function
        var updateSelectedItem = function(){
          //sets the selected item to the inventory service selected item
          $scope.selectedItem = inventoryService.getSelectedItem();
        };

        //Sends function off to be run at a later time.
        inventoryService.registerObserverCallback(updateSelectedItem);


        //Gets all the users in the firebase service
        fbService.getAllUsers().then(function(response) {
            $rootScope.users = response;
        });

          $('.userloggedin').hide();

          setTimeout(function () {
            $('.pageloader-img').fadeTo(600, 1, function(){});
            $('.loadingtext').fadeTo(600, 1, function(){});
          }, 200);

          setTimeout(function () {
            $('.loadingtext').fadeOut('slow', function() {

            });
          }, 1000);


          setTimeout(function () {
            $('.loginbuttons').fadeTo(600, 1, function(){});
            $('.load-title').fadeTo(600, 1, function(){});
          }, 1600);

        var fbRef = new Firebase(fb.url);

        var shopRef = fbRef.child("shop");

        $scope.gitHubLogin = function() {
            fbRef.authWithOAuthPopup("github", function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                    $rootScope.gitHubUid = authData.github.id;
                    $rootScope.userData = authData.github;

                    $rootScope.user = $firebaseObject(new Firebase(fb.url + "user/" + $rootScope.gitHubUid));
                    $scope.$apply();

                    if ($rootScope.user.coins === undefined) {
                      $rootScope.createUser($rootScope.gitHubUid);
                      $rootScope.user = $firebaseObject(new Firebase(fb.url + "user/" + $rootScope.gitHubUid));
                      $scope.$apply();
                    }

                    $rootScope.currentCoins = parseInt($rootScope.user.coins);
                    console.log($rootScope.user);

                    inventoryService.setData();

                    $scope.selectedItem = inventoryService.getSelectedItem();

                    $(".loader").fadeOut("slow");


                    var hunger = document.getElementById("hunger");
                    var happiness = document.getElementById("happiness");


                    $('.kitty').click(function(event) {
                      if ($scope.selectedItem.type === "food") {
                        hunger.value += $scope.selectedItem.increase;
                        $('.feed').fadeTo('fast', 1, function(){});

                        setTimeout(function () {
                          $('.feed').fadeOut('fast');
                        }, 500);
                        $scope.addCoins($scope.selectedItem.increase);
                      }

                      if ($scope.selectedItem.type === "toy") {
                        happiness.value += $scope.selectedItem.increase;
                        $('.feed').fadeTo('fast', 1, function(){});

                        setTimeout(function () {
                          $('.feed').fadeOut('fast');
                        }, 500);
                        $scope.addCoins($scope.selectedItem.increase);
                      }

                    });

                    setTimeout(function () {
                      $('.userloggedin').slideDown('slow');
                    }, 200);

                    setTimeout(function () {
                      $('.userloggedin').slideUp('slow');
                    }, 5000);
                }
            });
        };


        $rootScope.id = 0;

        $rootScope.createUser = function(uid) {

            fbRef.child("user").child(uid).set({
                coins: 0,
                inventory: [{
                  name: 'Petting Hand',
                  price: 9999,
                  type: 'toy',
                  altimg: 'http://image005.flaticon.com/1/svg/119/119960.svg',
                  img: 'http://image005.flaticon.com/1/svg/119/119960.svg',
                  increase: 10
                }],
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
            $rootScope.user.coins = $rootScope.currentCoins + numCoins; //test 3 way binding?wait
            $rootScope.user.$save();
            $rootScope.currentCoins = parseInt($scope.user.coins);
        };

        $rootScope.removeCoins = function(numCoins) {
          $rootScope.user.coins = $rootScope.currentCoins - numCoins; //test 3 way binding?wait
          $rootScope.user.$save();
          $rootScope.currentCoins = parseInt($rootScope.user.coins);
        };

        // setInterval(function(){
        //   console.log($scope.user, "hit");
        // },1000);

        //   var auth = $firebaseAuth(ref);
        // // login with Facebook
        // auth.$authWithOAuthPopup("facebook").then(function(authData) {
        //   console.log("Logged in as:", authData.uid);
        // }).catch(function(error) {
        //   console.log("Authentication failed:", error);
        // });

    });
