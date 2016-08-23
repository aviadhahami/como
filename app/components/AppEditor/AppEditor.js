/**
 * Created by aviad on 8/18/2016.
 */
'use strict';

function AppEditorController(Pixabay){
	console.log(this);
	let data = this.data;
	
	this.imgQuery = '';
	this.imgID = '';
	
	let that = this;
	this.getByID = function(){
		console.log(that.imgID);
		Pixabay.getImageByID(that.imgID).then(function(res){
			console.log('from ctrl',res);
			data.imgURL = res;
			console.log(data);
		},function(err){
			console.log('from ctrl', err);
		});
		console.log(that.data);
	};
	this.getByQuery = function(){
		data.imgURL = Pixabay.getImageByQuery(that.imgQuery);
	};
	
}

angular.module('comoApp').component('appEditor', {
	templateUrl: './../../components/AppEditor/AppEditor.html',
	controller: AppEditorController,
	controllerAs:'compCtrl',
	bindings: {
		data: '=', // Two way binding
		screen: '<' // One way
	}
});