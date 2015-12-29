'use strict';

/**
 * @ngdoc service
 * @name angularBoilerplateApp.cartProvider
 * @description
 * # cartProvider
 * Provider in the angularBoilerplateApp.
 */
angular.module('angularBoilerplateApp')
  .provider('CartProvider', function () {

    // Private variables
    var _cartItems = [];
    var _cartItemsTotalItems = 0;
    var _cartItemsTotalPrice = 0;
    var observerCallbacks = [];
    //var _rScope = $injector.get('$rootScope');
    
    this.$get = function(){
      return {
        //register an observer
        registerObserverCallback: function(callback){
          observerCallbacks.push(callback);
        },

        //call this when you know 'foo' has been changed
        notifyObservers: function(){
          angular.forEach(observerCallbacks, function(callback){
            callback();
          });
        },
        addItemToCart: function(newItem){
          console.log('addItemToCart');

          // loops to check index of id
          var cartItemsLength = _cartItems.length;
          var itemIdIndex = null;
          var i = 0;
          for (i = 0; i < cartItemsLength; i++) {
            if(_cartItems[i].unique_reference_id === newItem.unique_reference_id){
              itemIdIndex = i;

            break;
            }
          }

          // checks if it is in the loop
          if (itemIdIndex === null) {
            // not in loop
            newItem.amount = 1;
            _cartItems.push(newItem);
          } else {
            // in loop
            _cartItems[itemIdIndex].amount ++;

          }
          // increases the total
          _cartItemsTotalItems++;

          // calculates the total price
          _cartItemsTotalPrice = 0;
          cartItemsLength = _cartItems.length;
          i = 0;
          for (i = 0; i < cartItemsLength; i++) {
            console.log('test');
            _cartItemsTotalPrice = _cartItemsTotalPrice + (parseInt(_cartItems[i].detail_Gen1, 10)*_cartItems[i].amount);
          }


          console.log(_cartItems);

        },
        setCartItems: function(cartItems){
          _cartItems = cartItems;
        },
        getCartItems: function(){
          return _cartItems;
        },
        setCartItemsTotalItems: function(cartItemsTotalItems){
          _cartItemsTotalItems = cartItemsTotalItems;
        },
        getCartItemsTotalItems: function(){
          return _cartItemsTotalItems;
        },
        setCartItemsTotalPrice: function(cartItemsTotalPrice){
          _cartItemsTotalPrice = cartItemsTotalPrice;
        },
        getCartItemsTotalPrice: function(){
          return _cartItemsTotalPrice;
        }

      };

    };
    
  });
