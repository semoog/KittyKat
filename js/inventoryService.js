angular.module('kittyApp')
.service("inventoryService", function($rootScope){

          var observerCallbacks = [];

          this.setDataRan = false;

          if (this.setDataRan) {
            this.inventory = $rootScope.user.inventory;
          }


          this.setData = function() {
            this.inventory = $rootScope.user.inventory;
            this.selectedIndex = 0;
            console.log('Data set yo.');
            this.setDataRan = true;
          };

          this.setIndex = function(index) {
            this.selectedIndex = index;
            //Call ya boii and let him know you changed.
            notifyObservers();
          };

          this.getSelectedItem = function() {
            //Gets the selected item from the inventory
            return this.inventory[this.selectedIndex];
          };

          this.registerObserverCallback = function(callback){
            observerCallbacks.push(callback);
            //push the callback into the array.
            //Register Observer Callback... You're passing a callback to be 'observed'

          };

          var notifyObservers = function(){
            // Notify observers then runs all those callbacks.
            angular.forEach(observerCallbacks, function(callback){
              callback();
            });
          };



});
