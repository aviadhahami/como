'use strict';

/**
 * @ngdoc overview
 * @name comoApp
 * @description
 * # comoApp
 *
 * Main module of the application.
 */
angular
  .module('comoApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
	  $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
