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
		
		this.data = {};
		
		this.toggleScreen = function(screen){
			let capsScreen = screen.toUpperCase();
			if(SCREEN_ENUM.hasOwnProperty(capsScreen)){
				this.currentScreen = SCREEN_ENUM[capsScreen];
				console.log('screen changes');
			}
			
		};
	});
