angular.module('earthquakeApp').controller('EarthquakeController', ['$scope', '$rootScope', '$timeout', '$window', 'earthquakeFactory', MainController]);

function MainController ($scope, $rootScope, $timeout, $window, earthquakeFactory) {

  $scope.loadEarthquakes = function() {
    $scope.earthquakes = { item : [] };

    earthquakeFactory.getEarthquakes().then(function(res) {
      console.log(res);
      $scope.earthquakes = res;

      $scope.isLoading = false;
      $rootScope.$broadcast('loadEarthquakesComplete');
    });
  }

  $scope.openEarthquake = function(earthquake) {
    $window.open(earthquake.link, '_blank');
  }

  $scope.deleteEarthquake = function(earthquake) {
    $scope.earthquakes = earthquakeFactory.deleteEarthquake(earthquake);
  }

  $scope.$on('loadEarthquakes', function(event, args) {
    $scope.isLoading = true;

    $timeout(function() {
      $scope.loadEarthquakes();
    }, 1000);
  });

  $scope.loadEarthquakes();
  $scope.isLoading = true;

};
