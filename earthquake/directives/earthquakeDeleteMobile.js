var earthquakeApp = angular.module('earthquakeApp');

earthquakeApp.directive('earthquakeDeleteMobile', function($timeout) {
  return {
    link: function (scope, element, attrs) {
      scope.$watch(attrs.earthquakeDeleteMobile, function(newValue, oldValue) {
        if (newValue == true) {
          element.css('max-height', element.height() + 'px');

          element.velocity({
            translateX: '600px'
          }).velocity({
            height: 0,
            marginBottom: 0
          }, {
            duration: 'slow'
          });
        }
      });
    }
  };
});
