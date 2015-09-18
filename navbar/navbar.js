angular.module('earthquakeApp').controller('NavController', ['$scope', '$rootScope', NavController]);

function NavController ($scope, $rootScope) {
  var refreshStringConstants = {
    normal: 'Refresh',
    loading: 'Loading'
  };

  $scope.reload = function() {
    if ($scope.isLoading) {
      return;
    }
    $scope.refreshText = refreshStringConstants.loading;
    $scope.isLoading = true;

    $rootScope.$broadcast('loadEarthquakes');
  }

  $scope.$on('loadEarthquakesComplete', function(event, args) {
    $scope.refreshText = refreshStringConstants.normal;
    $scope.isLoading = false;
  });

  $scope.refreshText = refreshStringConstants.loading;
  $scope.isLoading = true;
};
