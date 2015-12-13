'use strict';

/**
 * @ngdoc function
 * @name angularBoilerplateApp.controller:ShopItemCtrl
 * @description
 * # ShopItemCtrl
 * Controller of the angularBoilerplateApp
 */
angular.module('angularBoilerplateApp')
  .controller('ShopItemCtrl', function ($scope, $routeParams, shopItemsProvider) {
    
    // declares that the transition in should begin
    $scope.transitionIn = true;
    
    $scope.items = null;
    $scope.loadingStatus = "loading";

    
    if(typeof $routeParams.itemId === 'undefined') {
      $scope.itemId = 'nothing';
    } else {
      $scope.itemId = $routeParams.itemId;
    }

    // sets batch size
    shopItemsProvider.setBatch('1');
    shopItemsProvider.setBatchSize('1');

    $scope.submitShop = function(){
      shopItemsProvider.callShop()
        .then(function(data){
          $scope.items = JSON.parse(data.substring(1, data.length-1).substr(1));
          $scope.loadingStatus = "loaded";
          console.log($scope.items);
        }, function(data){
          $scope.loadingStatus = "error";
          console.log(data);
        });
    };


    $scope.submitShop();


  });
