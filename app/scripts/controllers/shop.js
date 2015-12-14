'use strict';

/**
 * @ngdoc function
 * @name angularBoilerplateApp.controller:ShopCtrl
 * @description
 * # ShopCtrl
 * Controller of the angularBoilerplateApp
 */
angular.module('angularBoilerplateApp')
  .controller('ShopCtrl', function ($scope, $routeParams, shopItemsProvider) {

    // declares that the transition in should begin
    $scope.transitionIn = true;
    
    $scope.items = null;
    $scope.loadingStatus = "loading";
    
    // checks for filters
    var originalWhereFilter = shopItemsProvider.getWhereConditionArray().split(",")[0];
    if(typeof $routeParams.filterType === 'undefined') {
      shopItemsProvider.setWhereConditionArray(originalWhereFilter);
    } else {
      shopItemsProvider.setWhereConditionArray(originalWhereFilter+',classification_1||'+$routeParams.filterType);
      console.log(shopItemsProvider.getWhereConditionArray);
    }

    // sets batch size
    shopItemsProvider.setBatch('1');
    shopItemsProvider.setBatchSize('8');

    $scope.submitShop = function(){
      shopItemsProvider.callShop()
        .then(function(data){
          $scope.items = data;
          $scope.loadingStatus = "loaded";
          console.log($scope.items);
        }, function(data){
          $scope.loadingStatus = "error";
          console.log(data);
        });
    };


    $scope.submitShop();

  });
