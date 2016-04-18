var app = angular.module('kittyApp', ['ui.router', 'firebase']);

app.constant('fb', {
      url: 'https://kittygachi.firebaseio.com/'
});

// var ref = new Firebase("https://kittygachi.firebaseio.com");



var hunger = document.getElementById("hunger");
var happiness = document.getElementById("happiness");

app.run(function($rootScope, $firebaseArray) {

    setInterval(function () {
      hunger.value += -1;
    }, 5000);

    setInterval(function () {
      happiness.value += -1;
    }, 3000);
});

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',

        })
        .state('shop', {
            url: '/shop',
            templateUrl: 'templates/shop.html',
            // controller: 'shopController'
        })
        .state('inventory', {
            url: '/inventory',
            templateUrl: 'templates/inventory.html',
            // controller: 'inventoryController'
        });


    $urlRouterProvider.otherwise('/home');

  });
