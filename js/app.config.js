'use strict';

angular.module('app').
  config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/createAccount', {
            template: '<create-account></create-account>'
          }).
          when('/competitions', {
            template: '<competitions></competitions>'
          }).
          when('/login', {
            template: '<login></login>'
          }).
          when('/matchSchedule', {
            template: '<match-schedule></match-schedule>'
          }).
          otherwise('/login');
      }
  ]);
