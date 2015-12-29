'use strict';

describe('Service: shopItemsProvider', function () {

  // instantiate service
  var shopItemsProvider,
    init = function () {
      inject(function (_shopItemsProvider_) {
        shopItemsProvider = _shopItemsProvider_;
      });
    };

  // load the service's module
  beforeEach(module('angularBoilerplateApp'));

  it('should do something', function () {
    init();

    expect(!!shopItemsProvider).toBe(true);
  });

  it('should be configurable', function () {
    module(function (shopItemsProviderProvider) {
      shopItemsProviderProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(shopItemsProvider.greet()).toEqual('Lorem ipsum');
  });

});
