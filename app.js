var app = angular.module('myApp', ['ngTable','bh.config']).
controller('MainCtrl', function($scope,$candidates) {
    
    var params = { query: "id:[* TO *]"
    			,fields: "id,name,email,status,dateAdded,experience" };
    $candidates.get(params).then(function(candidates){
    	$scope.candidates = candidates;
    }, function(error){
    	console.log("error: ",error);
    });

})
.factory('$candidates',function($http,$q,$config){
	return {
		get: function(params){
			var deferred = $q.defer(),
				url = [$config.restUrl,'search/Candidate?'
						,'BhRestToken=', $config.BhRestToken
						,'&query=',params.query||'id:[* TO *]'
						,'&fields=',params.fields||'id,name'
						,'&count=',params.count||50
						,'&start=',params.start||0
						,'&sort=',params.sort||'-dateAdded'];
			$http.get(url.join('')).success(function(response){
				deferred.resolve(response.data);
			}).error(function(stuff){
				deferred.reject(stuff);
				console.log("error,",stuff);
			});
			return deferred.promise;
		}
	}

});