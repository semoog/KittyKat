angular.module('kittyApp')
.service("fbService", function($firebaseArray, $firebaseObject, fb, $q){

    this.getAllUsers = function(){
        var userRef = new Firebase(fb.url + '/user');

        var doSomethingLater = $q.defer();

        $firebaseArray(userRef).$loaded().then(function(response) {
          console.log("response", response);
          doSomethingLater.resolve(response);
        });

        return doSomethingLater.promise;
    };

    this.getShop = function(){
        var shopRef = new Firebase(fb.url + '/shop');


        var doSomethingLater = $q.defer();

        $firebaseArray(shopRef).$loaded().then(function(response) {
          console.log("response", response);
          doSomethingLater.resolve(response);
        });

        return doSomethingLater.promise;

            };
});
