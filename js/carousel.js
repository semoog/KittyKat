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
