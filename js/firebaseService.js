angular.module('kittyApp')
.service("fbService", function($firebaseArray, $firebaseObject, fb){                             

    this.getAllUsers = function(){
        var userRef = new Firebase(fb.url + '/user');
        return $firebaseArray(userRef);
    };

    this.getShop = function(){
        var shopRef = new Firebase(fb.url + '/shop');
        return $firebaseArray(shopRef);
    };
});
