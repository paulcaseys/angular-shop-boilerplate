'use strict';

/**
 * @ngdoc function
 * @name angularBoilerplateApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the angularBoilerplateApp
 */
angular.module('angularBoilerplateApp')
  .controller('NavigationCtrl', function ($scope, $location) {
    
    // Must use a wrapper object, otherwise "activeItem" won't work
    $scope.states = {};

    // navigation items
    $scope.items = [{
        id: '',
        title: 'Home',
        path: '#/'
    }, {
        id: 'shop',
        title: 'Shop',
        path: '#/shop'
    }];

    // declare default activeItem
    $scope.states.activeItem = '';

    // checks which item matches the path
    $scope.changeActiveItem = function(){
        var path = "#"+$location.path();
        var lookup = {};
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            lookup = $scope.items[i];
            if($scope.items[i].path === path){
                $scope.states.activeItem = $scope.items[i].id;
            }
        }
    };

    // changes page from click
    $scope.changePage = function(id){
        $location.path(id);
        $scope.changeActiveItem();
    };

    // caters for back button etc
    $scope.$on("$locationChangeStart", function() { 
        $scope.changeActiveItem();
    });

    $scope.changeActiveItem();
    console.log("NavigationCtrl");

});