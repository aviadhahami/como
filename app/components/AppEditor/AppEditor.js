/**
 * Created by aviad on 8/18/2016.
 */
'use strict';

function chunk(arr, size) {
	var newArr = [];
	for (var i=0; i<arr.length; i+=size) {
		newArr.push(arr.slice(i, i+size));
	}
	return newArr;
}

function AppEditorController(Pixabay){
	console.log(this);
	var data = this.data;
	
	this.imgQuery = '';
	this.imgID = '';
	this.errorMsg = null;
	this.imageOptions = null;
	var that = this;
	var clearErrorMessage = function () {
		that.errorMsg = null;
	};
	var clearOptionResults = function(){
		that.imageOptions = null;
	};
	var setErrorMsg = function (err) {
		that.errorMsg = err;
	};
	var clearTemps = function(){
		clearOptionResults();
		clearErrorMessage();
	};
	this.getByID = function(){
		clearTemps();
		if(!that.imgID){
			setErrorMsg('Please insert legit id');
			return;
		}
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
		clearTemps();
		if(!that.imgQuery){
			setErrorMsg('Please insert legit query');
			return;
		}
		Pixabay.getImageByQuery(that.imgQuery).then(function(res){
			console.log('succ from ctrl', res);
			that.imageOptions = chunk(res, 3);
		},function(err){
			setErrorMsg(err);
		});
	};
	this.selectImage = function (image) {
		console.log(image);
		that.data.loading = true;
		that.data.imgURL = image.previewURL;
		that.data.loading = false;
		
	};
	
}
AppEditorController.$inject = ['Pixabay'];
angular.module('comoApp').component('appEditor', {
	templateUrl: 'components/AppEditor/AppEditor.html',
	controller: AppEditorController,
	controllerAs:'compCtrl',
	bindings: {
		data: '=', // Two way binding
		screen: '<' // One way
	}
});