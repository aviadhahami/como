'use strict';

/**
 * @ngdoc function
 * @name comoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the comoApp
 */
var SCREEN_ENUM = {
	ABOUT:'ABOUT',
	IMAGES:'IMAGES',
	HOURS:'HOURS'
};
angular.module('comoApp')
	.controller('MainCtrl', function () {
		this.currentScreen = SCREEN_ENUM.ABOUT;
		
	});
