/**
 * Created by aviad on 8/18/2016.
 */
'use strict';

function DevicePreviewController(){
	console.log(this);
	
}

angular.module('comoApp').component('devicePreview', {
	templateUrl: './../../components/devicePreview/DevicePreview.html',
	controller: DevicePreviewController,
	controllerAs:'compCtrl',
	bindings: {
		screen:'<', // One way binding
		data:'<'
	}
});