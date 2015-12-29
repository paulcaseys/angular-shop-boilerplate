'use strict';

/**
 * @ngdoc function
 * @name angularBoilerplateApp.controller:ShopCtrl
 * @description
 * # ShopCtrl
 * Controller of the angularBoilerplateApp
 */
angular.module('angularBoilerplateApp')
  .controller('ShopCtrl', function ($scope, $routeParams, $location, ShopItemsProvider) {

    // declares that the transition in should begin
    $scope.transitionIn = true;
    
    $scope.items = null;
    $scope.loadingStatus = "loading";
    
    // checks for filters
    var originalWhereFilter = ShopItemsProvider.getWhereConditionArray().split(",")[0];
    if(typeof $routeParams.filterType === 'undefined') {
      ShopItemsProvider.setWhereConditionArray(originalWhereFilter);
    } else {
      ShopItemsProvider.setWhereConditionArray(originalWhereFilter+',classification_1||'+$routeParams.filterType);
      console.log(ShopItemsProvider.getWhereConditionArray);
    }

    // sets batch size
    ShopItemsProvider.setBatch('1');
    ShopItemsProvider.setBatchSize('8');

    $scope.submitShop = function(){
      ShopItemsProvider.callShop()
        .then(function(data){
          $scope.items = data;
          $scope.loadingStatus = "loaded";
          console.log($scope.items);
        }, function(data){
          $scope.loadingStatus = "error";
          console.log(data);
        });
    };

    $scope.gotoItem = function(itemId, title){  
      var titleConverted = title.replace(/\s+/g, '-').toLowerCase();
      var newPath = "shop/item/"+itemId+"/"+titleConverted;
      $location.path(newPath);
      //$scope.changeActiveItem();
    };


    $scope.submitShop();

  });
