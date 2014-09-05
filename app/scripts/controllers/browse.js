'use strict';

/**
 * @ngdoc function
 * @name gaCodeChallengeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gaCodeChallengeApp
 */
angular.module('gaCodeChallengeApp')
.controller('BrowseCtrl', function ($scope, $http, $log) {

    $scope.search = function() {

        $scope.showResults = false;

        // example: http://www.omdbapi.com/?t=True%20Grit&y=1969'
        var url = 'http://www.omdbapi.com/?t=' + $scope.searchInput.title;
        if ($scope.searchInput.year) {
            url = url + '&y=' + $scope.searchInput.year;
        }

        $http.get(url)
        .success(function(data /*, status, headers, config */) {
            $log.info('Success!');
            $scope.movieData = data;
            $scope.showResults = true;
        })
        .error(function(/* data, status, headers, config */) {
            $log.error('Oops!');
            $scope.reset();
        });
    };

    $scope.reset = function() {
        $scope.searchInput = {};
        $scope.showResults = false;
        // $scope.movieData = {};
    };

    var recommendedMovies = [
        { title: 'True Grit' },
        { title: 'True Grit', year: '1969' },
        { title: 'The Matrix' },
        { title: 'Gone With The Wind' },
        { title: 'Ferris Bueller\'s Day Off' },
        { title: 'Batman' },
        { title: 'Batman Begins' },
        { title: 'Star Trek' },
        { title: 'Star Wars: Episode IV - A New Hope'}
    ];

    var rCounter = 0;

    $scope.recommendAMovie = function() {
        var movie = recommendedMovies[rCounter];
        rCounter = (rCounter + 1) % recommendedMovies.length;
        $scope.searchInput = movie;
        $scope.search();
    };

    $scope.reset();

});