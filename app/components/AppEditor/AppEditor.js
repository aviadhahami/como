/**
 * Created by aviad on 8/18/2016.
 */
'use strict';

function AppEditorController(){
	alert(233);
};

angular.module('comoApp').component('appEditor', {
	templateUrl: './AppEditor.html',
	controller: AppEditorController,
	bindings: {
	}
});