/**
 * Created by aviad on 8/18/2016.
 */
'use strict';

function AppEditorController(Pixabay){
	console.log(this);
	var data = this.data;
	
	this.imgQuery = '';
	this.imgID = '';
	this.errorMsg = null;
	var that = this;
	var clearErrorMessage = function () {
		that.errorMsg = null;
	};
	var setErrorMsg = function (err) {
		that.errorMsg = err;
	};
	this.getByID = function(){
		clearErrorMessage();
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
		clearErrorMessage();
		if(!that.imgQuery){
			setErrorMsg('Please insert legit query');
			return;
		}
		Pixabay.getImageByQuery(that.imgQuery).then(function(res){
			console.log('succ from ctrl', res);
		},function(err){
			console.log('err from ctrl', err);
		});
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