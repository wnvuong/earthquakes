var earthquakeApp = angular.module('earthquakeApp');

earthquakeApp.directive('earthquakeHoverDelete', function($timeout) {
  return {
    link: function (scope, element, attrs) {
      $timeout(function() {
        element.css('pointer-events', 'none');
        element.css('opacity', 0);
        $(attrs.earthquakeHoverDelete).hover(function() {
          element.css('pointer-events', 'auto');
          element.css('opacity', 1);
        }, function() {

        });
      }, 0);

      $timeout(function() {
        $(attrs.earthquakeHoverDelete + '-wrapper').hover(function() {

        }, function() {
          element.css('opacity', 0);
          element.css('pointer-events', 'none');
        });
      });
    }
  };
});
