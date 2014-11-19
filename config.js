var app = angular.module('bh.config', [])
.factory('$config',function(){
	return {
		BhRestToken: "<your-rest-token>",
		restUrl: "https://rest9.bullhornstaffing.com/rest-services/czn29/"
	}			

});