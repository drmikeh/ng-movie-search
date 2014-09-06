'use strict';

/**
 * @ngdoc function
 * @name gaCodeChallengeApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the gaCodeChallengeApp
 */
angular.module('gaCodeChallengeApp')
.controller('SearchCtrl', function ($scope, SearchService, $log, $state) {

    $scope.movieData = SearchService.movieData;

    $scope.thePromise = null;

    $scope.search = function() {
        $scope.thePromise = SearchService.searchByTitle();
    };

    $scope.viewDetails = function(movieId) {
        $scope.thePromise = SearchService.searchById(movieId)
        .success(function() {
            $state.go('search.details');
        });
    };

    $scope.reset = function() {
        SearchService.reset();
    };

    var recommendedMovies = [
        { title: 'Batman' },
        { title: 'True Grit' },
        { title: 'The Matrix' },
        { title: 'Ferris Bueller\'s Day Off' },
        { title: 'Gone With The Wind' },
        { title: 'Star Trek' },
        { title: 'Star Wars' }
    ];

    var rCounter = 0;

    $scope.recommendAMovie = function() {
        var movie = recommendedMovies[rCounter];
        rCounter = (rCounter + 1) % recommendedMovies.length;
        SearchService.movieData.searchInput.title = movie.title;
        $scope.search();
    };
});
