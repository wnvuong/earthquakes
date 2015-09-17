var earthquakeApp = angular.module('earthquakeApp');

earthquakeApp.directive('earthquakeStatusColor', function() {
  return function (scope, element, attrs) {
    if (attrs.earthquakeStatusColor >= 5) {
      element.addClass('magnitude-five')
    }
    if (attrs.earthquakeStatusColor >= 7) {
      element.addClass('magnitude-seven')
    }
  }
});
