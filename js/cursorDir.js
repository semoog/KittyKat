var app = angular.module('kittyApp');

app.directive('cursorItem', function() {
    return {
      template: '<div class="cursor-item"></div>',
      restrict: 'E',
      link: function(scope) {
                var cursorItem, x, y;
                cursorItem = $('cursor-item');


                //Bind mousemove event to the element which will show tooltip
                $('html').mousemove(function(e) {
                    //find X & Y coodrinates
                    x = e.clientX,
                    y = e.clientY;

                    //Set tooltip position according to mouse position
                    cursorItem.css('top', (y + 10) + 'px');
                    cursorItem.css('left', (x + 10) + 'px');
                    cursorItem.css('background-image', ("url(" + scope.selectedItem.altimg + ")"));
                });

            }
    };
  });
