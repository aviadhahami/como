'use strict';

/**
 * @ngdoc service
 * @name comoApp.Pixabay
 * @description
 * # Pixabay
 * Service in the comoApp.
 */
var api = {
	key: '3146573-d397e7ae9edfec76d75c3fab7',
	URL: 'https://pixabay.com/api/'
};
var getByQueryURI = api.URL+'?key='+api.key+'&query=';
var getByIdURI = api.URL+'?key='+api.key+'&id=';

angular.module('comoApp')
	.service('Pixabay', ['$http','$q',function ($http,$q) {
		return {
			getImageByQuery: function(query){
				if (!query) {
					return;
				}
				console.log('Get by Q');
				var cleanQuery = query.replaceAll(' ','+');
				$http.get(getByQueryURI+cleanQuery).then( function(data){
					var previewURL = data.hits[0].previewURL;
					console.log(previewURL);
					return previewURL;
				});
			},
			getImageByID: function(id){
				if (!id) {
					return;
				}
				var deferred = $q.defer();
				console.log('Get by ID');
				$http.get(getByIdURI+id).then( function(res){
					console.log(res);
					if(res.data.hits.length>0 && res.data.hits[0].hasOwnProperty('previewURL')){
						deferred.resolve(res.data.hits[0].previewURL);
					}else{
						deferred.reject('No such ID');
					}
				},function(err){
					console.log(err);
					deferred.reject(err);
				});
				return deferred.promise;
			}
		};
	}]);