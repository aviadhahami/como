/**
 * Created by aviad on 8/18/2016.
 */
'use strict';

function AppEditorController(){
	console.log(this);
	let data = this.data;
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