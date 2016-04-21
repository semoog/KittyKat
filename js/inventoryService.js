angular.module('kittyApp')
.service("inventoryService", function($rootScope){

          this.setData = function() {
            this.inventory = $rootScope.user.inventory;
            this.selectedIndex = 0;
            console.log('Data set yo.');
          };

          this.setIndex = function(index) {
            this.selectedIndex = index;
          };

          this.getSelectedItem = function() {
            //Gets the selected item from the inventory
            return this.inventory[this.selectedIndex];
          };



});
