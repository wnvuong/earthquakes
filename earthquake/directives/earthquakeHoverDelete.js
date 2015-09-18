var earthquakeApp = angular.module('earthquakeApp');

earthquakeApp.directive('earthquakeHoverDelete', function($timeout) {
  return {
    compile: function(element, attrs) {
      return {
        pre: function (scope, element, attrs) {
          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            // You are in mobile browser
          } else {
            element.css('pointer-events', 'none');
            element.css('opacity', 0);
            
          }
        },
        post: function (scope, element, attrs) {
          $timeout(function() {
            $(attrs.earthquakeHoverDelete).hover(function() {
              element.css('pointer-events', 'auto');
              element.css('opacity', 1);
            }, function() { });
          }, 0);

          $timeout(function() {
            $(attrs.earthquakeHoverDelete + '-wrapper').hover(function() {
            }, function() {
              element.css('pointer-events', 'none');
              element.css('opacity', 0);
            });
          });
        }
      }
    }
  };
});
