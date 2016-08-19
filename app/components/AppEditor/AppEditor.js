/**
 * Created by aviad on 8/18/2016.
 */
'use strict';

function AppEditorController(){
	console.log(this);
}

angular.module('comoApp').component('appEditor', {
	templateUrl: './../../components/AppEditor/AppEditor.html',
	controller: AppEditorController,
	controllerAs:'compCtrl',
	bindings: {
		data:'<', // One way binding
	}
});