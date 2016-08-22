'use strict';

/**
 * @ngdoc service
 * @name comoApp.Pixabay
 * @description
 * # Pixabay
 * Service in the comoApp.
 */
const api = {
	key: '3146573-d397e7ae9edfec76d75c3fab7',
	URL: 'https://pixabay.com/api/'
};
const getByQueryURI = api.URL+'?key='+api.key+'&query=';
const getByIdURI = api.URL+'?key='+api.key+'&id=';

angular.module('comoApp')
	.service('Pixabay', ['$http',function ($http) {
		return {
			getImageByQuery: function(query){
				console.log('Get by Q');
				let cleanQuery = query.replaceAll(' ','+');
				$http.get(getByQueryURI+cleanQuery).then( function(data){
					let previewURL = data.previewURL;
					return previewURL;
				});
			},
			getImageByID: function(id){
				console.log('Get by ID');
				$http.get(getByIdURI+id).then( function(data){
					let previewURL = data.previewURL;
					return previewURL;
				});
			}
		};
	}]);
