'use strict';

/**
 * @ngdoc function
 * @name gaCodeChallengeApp.service:SearchService
 * @description
 * # SearchService
 * Search Service of the gaCodeChallengeApp
 */
angular.module('gaCodeChallengeApp')
.service('SearchService', function ($http, $log) {

    var that = this;

    that.movieData = {
        searchInput : {},
        movies : [],
        details : {}
    };

    that.reset = function() {
        that.movieData.searchInput = {};
        that.movieData.movies.length = 0;
        that.movieData.details = {};
    };

    that.reset();

    var baseUrl = 'http://www.omdbapi.com/';

    // example: http://www.omdbapi.com/?t=True%20Grit&y=1969'
    that.searchByTitle = function() {
        $log.info('searchByTitle: ' + that.movieData.searchInput.title);
        var url = baseUrl + '?s=' + that.movieData.searchInput.title;
        var promise = $http.get(url);
        promise.success(function(data /*, status, headers, config */) {
            $log.info('Success!');
            that.movieData.movies = data.Search;
        })
        .error(function(/* data, status, headers, config */) {
            $log.error('Oops!');
            that.movieData.movies = [];
        });
        return promise;
    };

    that.searchById = function(id) {
        $log.info('searchById: ' + id);
        var url = baseUrl + '?i=' + id;
        var promise = $http.get(url);
        promise.success(function(data /*, status, headers, config */) {
            $log.info('Success!');
            that.movieData.details = data;
        })
        .error(function(/* data, status, headers, config */) {
            $log.error('Oops!');
            that.movieData.details = {};
        });
        return promise;
    };

});