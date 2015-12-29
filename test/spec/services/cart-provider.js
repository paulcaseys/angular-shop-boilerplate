'use strict';

describe('Service: cartProvider', function () {

  // instantiate service
  var cartProvider,
    init = function () {
      inject(function (_cartProvider_) {
        cartProvider = _cartProvider_;
      });
    };

  // load the service's module
  beforeEach(module('angularBoilerplateApp'));

  it('should do something', function () {
    init();

    expect(!!cartProvider).toBe(true);
  });

  it('should be configurable', function () {
    module(function (cartProviderProvider) {
      cartProviderProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(cartProvider.greet()).toEqual('Lorem ipsum');
  });

});
