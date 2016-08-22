/**
 * Created by aviad on 8/18/2016.
 */
'use strict';

function AppEditorController(Pixabay){
	console.log(this);
	let data = this.data;
	
	this.imgQuery = null;
	this.imgID = null;
	
	let that = this;
	this.getByID = function(){
		data.imgURL = Pixabay.getImageByID(that.imgID);
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