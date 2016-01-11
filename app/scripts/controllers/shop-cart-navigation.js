'use strict';

/**
 * @ngdoc function
 * @name angularBoilerplateApp.controller:ShopCartNavigationCtrl
 * @description
 * # ShopCartNavigationCtrl
 * Controller of the angularBoilerplateApp
 */
angular.module('angularBoilerplateApp')
  .controller('ShopCartNavigationCtrl', function ($scope, CartProvider) {

	$scope.cartItems = CartProvider.getCartItems();
	$scope.cartItemsTotalItems = CartProvider.getCartItemsTotalItems();
	$scope.cartItemsTotalPrice = CartProvider.getCartItemsTotalPrice();
	
    var updatedCart = function(){
		console.log("CART UPDATED");
		$scope.cartItems = CartProvider.getCartItems();
		$scope.cartItemsTotalItems = CartProvider.getCartItemsTotalItems();
		$scope.cartItemsTotalPrice = CartProvider.getCartItemsTotalPrice();
	};

	// observes provider for updates
	CartProvider.registerObserverCallback(updatedCart);

    console.log("ShopCartNavigationCtrl");

  });
