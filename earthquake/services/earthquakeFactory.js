var earthquakeApp = angular.module('earthquakeApp');

earthquakeApp.factory('earthquakeFactory', ['$http', '$q', '$timeout', EarthquakeFactory]);

function EarthquakeFactory ($http, $q, $timeout) {

  var usgsURL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'http%3A%2F%2Fearthquake.usgs.gov%2Fearthquakes%2Fshakemap%2Frss.xml'&format=json&callback=";

  var earthquakeFactory = {};
  var earthquakes = {};

  earthquakeFactory.getEarthquakes = function() {
    var deferred = $q.defer();

    $http.get(usgsURL).then(function(res) {
      earthquakes = res.data.query.results.rss.channel;
      earthquakes.success = true;

      earthquakes.item.forEach(function(elem, index) {
        FormatTitleAndMagnitude(elem);
        FormateDate(elem);
        FormatImg(elem);
      });

      deferred.resolve(earthquakes);
    }, function(res) {
      res.success = false;

      deferred.resolve(res)
    });

    return deferred.promise;
  }

  earthquakeFactory.deleteEarthquake = function(earthquake, index) {
    earthquakes.item.splice(index, 1);

    return earthquakes;
  }

  return earthquakeFactory;
}

function FormatTitleAndMagnitude (elem) {
  var titleArray = elem.title.split(' - ');

  elem.magnitude = titleArray[0];
  elem.title = titleArray[1];
}

function FormateDate (elem) {
  elem.pubDate = new Date(elem.pubDate);
}

function FormatImg (elem) {
  var split = elem.description.split(' ')[1];
  split = split.split('\"')[1];

  elem.img = elem.link + 'download/intensity.jpg';
}
