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
    
    $scope.item = null;
    $scope.loadingStatus = "loading";

    if(typeof $routeParams.itemId === 'undefined') {
      $scope.itemId = 'nothing';
    } else {
      $scope.itemId = $routeParams.itemId;
    }
    //$scope.itemId = "unique3996";

    
    $scope.submitShop = function(){


      var originalWhereFilter = shopItemsProvider.getWhereConditionArray().split(",")[0];
      shopItemsProvider.setWhereConditionArray(originalWhereFilter+',external_reference_string||'+$scope.itemId);
      //

      // sets batch size
      shopItemsProvider.setBatch('1');
      shopItemsProvider.setBatchSize('1');

      shopItemsProvider.callShop()
        .then(function(data){
          if(typeof data[0] === 'undefined'){
            $scope.loadingStatus = "error";
          } else {
            $scope.item = data[0];
            console.log($scope.item);
            $scope.loadingStatus = "loaded";
          }
        }, function(data){
          $scope.loadingStatus = "error";
          console.log(data);
        });
    };



    // the existing respons
    var existingResponse = shopItemsProvider.getResponse();

    // checks if data has been loaded before
    if(existingResponse === null) {
      // HAS NOT BEEN LOADED
      console.log("has not been loaded");
      
      // loads item
      $scope.submitShop();

    } else {
      // HAS BEEN LOADED
      console.log("has been loaded");

      // loops to check index of id
      var existingResponseLength = existingResponse.length;
      var itemIdIndex = null;
      var i = 0;
      for (i = 0; i < existingResponseLength; i++) {
        if(existingResponse[i].external_reference_string === $routeParams.itemId){
          itemIdIndex = i;
          $scope.item = existingResponse[i];
          //console.log("pop! "+i+" : "+existingResponse[i].external_reference_string+" : "+$routeParams.itemId);

          break;
        }
      }

      // checks if it is in the loop
      if ($scope.item === null) {
        // loads item
        $scope.submitShop();
        console.log("couldn't find item in loaded data, loading it myself");
      } else {
        console.log("found item in previously loaded data, no need to load it!");
        console.log($scope.item);
        $scope.loadingStatus = "loaded";
      }
    }
    

  });
