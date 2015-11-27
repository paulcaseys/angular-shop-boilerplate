'use strict';

/**
 * @ngdoc function
 * @name angularBoilerplateApp.controller:ShopCtrl
 * @description
 * # ShopCtrl
 * Controller of the angularBoilerplateApp
 */
angular.module('angularBoilerplateApp')
  .controller('ShopCtrl', function ($scope, shopItemsProvider) {

    // declares that the transition in should begin
    $scope.transitionIn = true;
    
    $scope.items = null;
    $scope.loadingStatus = "loading";

    shopItemsProvider.setBatch('1');
    shopItemsProvider.setBatchSize('8');

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
