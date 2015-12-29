'use strict';

/**
 * @ngdoc service
 * @name angularBoilerplateApp.cartProvider
 * @description
 * # cartProvider
 * Provider in the angularBoilerplateApp.
 */
angular.module('angularBoilerplateApp')
  .provider('cartProvider', function () {

    // Private variables
    var salutation = 'Hello';

    // Private constructor
    function Greeter() {
      this.greet = function () {
        return salutation;
      };
    }

    // Public API for configuration
    this.setSalutation = function (s) {
      salutation = s;
    };

    // Method for instantiating
    this.$get = function () {
      return new Greeter();
    };
  });
