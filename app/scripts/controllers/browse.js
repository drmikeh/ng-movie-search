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

        // example: http://www.omdbapi.com/?t=True%20Grit&y=1969'
        var url = 'http://www.omdbapi.com/?t=' + $scope.searchInput.title;
        if ($scope.searchInput.year) {
            url = url + '&y=' + $scope.searchInput.year;
        }

        $http.get(url)
        .success(function(data, status, headers, config) {
            $log.info('Success!');
            $scope.movieData = {
                data : data,
                status : status,
                headers : headers,
                config : config
            };
        })
        .error(function(data, status, headers, config) {
            $log.error('Oops!');
            $scope.movieData = {
                data : data,
                status : status,
                headers : headers,
                config : config
            };
        });
    };

    $scope.reset = function() {
        $scope.searchInput = {
            title: ''
        };
        $scope.movieData = {};
    };

    $scope.reset();

});