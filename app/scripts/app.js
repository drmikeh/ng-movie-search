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
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home',   { url: '/home',   templateUrl: 'views/home.html' })
        .state('browse', { url: '/browse', templateUrl: 'views/browse.html', controller: 'BrowseCtrl' })
        .state('about',  { url: '/about',  templateUrl: 'views/about.html' });
});
