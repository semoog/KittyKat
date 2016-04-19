var app = angular.module('kittyApp', ['ui.router', 'firebase']);

app.constant('fb', {
      url: 'https://kittygachi.firebaseio.com/'
});

// var ref = new Firebase("https://kittygachi.firebaseio.com");



var hunger = document.getElementById("hunger");
var happiness = document.getElementById("happiness");

app.run(['$rootScope', function($root, $rootScope, $firebaseArray) {

  $root.$on('$routeChangeStart', function(e, curr, prev) {
    if (curr.$$route && curr.$$route.resolve) {
      // Show a loading message until promises aren't resolved
      $root.loadingView = true;
    }
  });
  $root.$on('$routeChangeSuccess', function(e, curr, prev) {
    // Hide loading message
    $root.loadingView = false;
  });

    setInterval(function () {
      hunger.value += -1;
    }, 5000);

    setInterval(function () {
      happiness.value += -1;
    }, 3000);
}]);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',

        })
        .state('shop', {
            url: '/shop',
            templateUrl: 'templates/shop.html',
            controller: 'shopController',
            resolve: {
              users: function(fbService) {
                  return fbService.getAllUsers();
              },
              shop: function(fbService) {
                  return fbService.getShop();
              }
            }
        })
        .state('inventory', {
            url: '/inventory',
            templateUrl: 'templates/inventory.html',
            // controller: 'inventoryController'
        });


    $urlRouterProvider.otherwise('/home');

  });
