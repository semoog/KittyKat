var app = angular.module('semoapp', ['ui.router']);

var randomWidth = 10000;
var timer = setInterval(toggleEyelids, 1000);
var catState = {};

function blink() {
  if(catState.blinking) {
    return;
  }

  catState.blinking = true;
  $('#eyelids').show();

  setTimeout(function () {
    catState.blinking = false;
    $('#eyelids').hide();
  }, 200);
}
function toggleEyelids() {
    blink();
    clearInterval(timer);
    timer = setInterval(toggleEyelids, parseInt(Math.random() * randomWidth + 3000));
}

app.directive('imgSlider', function() {

    return {
        templateUrl: '/templates/img-slider.html',
        restrict: 'E',
        link: function(scope, element, attrs) {

            scope.images = ['A', 'B', 'C'];

            scope.indexShown = 0;

            scope.indexShownMinus = function() {
                if (scope.indexShown === 0) {
                    scope.indexShown = scope.images.length - 1;
                } else {
                    scope.indexShown--;
                }
            };

            scope.indexShownPlus = function() {

                if (scope.indexShown === (scope.images.length - 1)) {
                    scope.indexShown = 0;
                } else {
                    scope.indexShown++;
                }
            };


        }

    };
});
