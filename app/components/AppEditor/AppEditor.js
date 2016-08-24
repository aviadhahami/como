/**
 * Created by aviad on 8/18/2016.
 */
'use strict';

function AppEditorController(Pixabay){
	console.log(this);
	let data = this.data;
	
	this.imgQuery = '';
	this.imgID = '';
	this.errorMsg = null;
	let that = this;
	let clearErrorMessage = function () {
		that.errorMsg = null;
	};
	let setErrorMsg = function (err) {
		that.errorMsg = err;
	};
	this.getByID = function(){
		clearErrorMessage();
		data.loading = true;
		Pixabay.getImageByID(that.imgID).then(function(res){
			console.log('from ctrl',res);
			data.imgURL = res;
		},function(err){
			console.log('from ctrl, err', err);
			setErrorMsg(err);
		}).then(function() {
			data.loading = false;
		});
	};
	this.getByQuery = function(){
		clearErrorMessage();
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