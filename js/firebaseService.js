angular.module('kittyApp')
.service("fbService", function($firebaseArray, $firebaseObject, fb){
                                   //Firebase Object is for 3 way binding --- Doesn't NG-Repeat well
                                   //Firebase Array you have to update each record individually

    this.getAllUsers = function(){
        var userRef = new Firebase(fb.url + '/user');
        return $firebaseArray(userRef);
    };

    this.getShop = function(){
        var shopRef = new Firebase(fb.url + '/shop');
        return $firebaseArray(shopRef);
    };
});
