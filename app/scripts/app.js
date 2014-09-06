'use strict';

/**
 * @ngdoc overview
 * @name gaCodeChallengeApp
 * @description
 * # gaCodeChallengeApp
 *
 * Main module of the application.
 */
angular
  .module('gaCodeChallengeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ui.router.stateHelper',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ct.ui.router.extras',
    'cgBusy'
  ])
  .config(function($stateProvider, stateHelperProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state({
        name: 'home',
        url: '/home',
        templateUrl: 'views/home.html'
    });

    // setup a default child route for search
    $urlRouterProvider.when('/search', '/search/list');

    stateHelperProvider
    .setNestedState({
        name: 'search',
        url: '/search',
        abstract: true,
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        deepStateRedirect: true,
        sticky: true,
        children: [
            {
                name: 'list',
                url: '/list',
                views: {
                    'content': {
                        templateUrl: 'views/list.html'
                    }
                }
            },
            {
                name: 'details',
                url: '/details',
                views: {
                    'content': {
                        templateUrl: 'views/details.html'
                    }
                }
            }
        ]
    });

    $stateProvider
    .state({
        name: 'about',
        url: '/about',
        templateUrl: 'views/about.html'
    });
});
