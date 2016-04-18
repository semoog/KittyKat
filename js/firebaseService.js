angular.module('kittyApp')
.service("fbService", function($firebaseArray, $firebaseObject, fb){
                                   //Firebase Object is for 3 way binding --- Doesn't NG-Repeat well
                                   //Firebase Array you have to update each record individually

    this.getAllUsers = function(){
        var ref = new Firebase(fb.url + '/user');
        return $firebaseObject(ref);
    };

});
