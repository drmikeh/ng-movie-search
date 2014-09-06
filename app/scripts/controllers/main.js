'use strict';

/**
 * @ngdoc function
 * @name gaCodeChallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gaCodeChallengeApp
 */
angular.module('gaCodeChallengeApp')
.controller('MainCtrl', function ($scope, $state) {

    $scope.tabs = [
        { heading: 'Home',    route: 'home',           active: false },
        { heading: 'Search',  route: 'search.list',    active: false },
        { heading: 'Details', route: 'search.details', active: false },
        { heading: 'About',   route: 'about',          active: false }
    ];

    $scope.go = function(route) {
        $state.go(route);
    };

    $scope.active = function(route) {
        return $state.is(route);
    };

    $scope.$on('$stateChangeSuccess', function() {
        $scope.tabs.forEach(function(tab) {
            tab.active = $scope.active(tab.route);
        });
    });

});
