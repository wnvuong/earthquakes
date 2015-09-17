angular.module('earthquakeApp', ['ngRoute', 'ngAnimate']).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'earthquake/earthquake.html',
        controller: 'EarthquakeController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
