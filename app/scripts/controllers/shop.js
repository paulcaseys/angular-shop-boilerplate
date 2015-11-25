'use strict';

/**
 * @ngdoc function
 * @name angularBoilerplateApp.controller:ShopCtrl
 * @description
 * # ShopCtrl
 * Controller of the angularBoilerplateApp
 */
angular.module('angularBoilerplateApp')
  .controller('ShopCtrl', function ($scope, $http) {

	$scope.items = null;
	$scope.loadingStatus = "loading";

	$http.get('http://cosmosis-api.com/api/service/data/format/jsonp/?project_name=SummerAtTarget&project_password=6CB4816A23A965B5DFD58E45F4C23&table=unique_references&batch=1&batchSize=6&whereConditionArray=project_id||9&select=*&orderBy=vote_count||desc&callback=?')
        .success(function (data) {
            $scope.items = JSON.parse(data.substring(1, data.length-1).substr(1));
			$scope.loadingStatus = "loaded";
            console.log($scope.items);
        })
		.error(function () {
			$scope.loadingStatus = "error";
        });

  });
