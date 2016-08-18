/**
 * Created by aviad on 8/18/2016.
 */
'use strict';

let AppEditorController = function(){
	alert(2);
};

angular.module('comoApp').component('appEditor', {
	templateUrl: 'AppEditor.html',
	controller: AppEditorController,
	bindings: {
	}
});