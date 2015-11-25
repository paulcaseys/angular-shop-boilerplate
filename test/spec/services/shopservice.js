'use strict';

describe('Service: shopService', function () {

  // load the service's module
  beforeEach(module('angularBoilerplateApp'));

  // instantiate service
  var shopService;
  beforeEach(inject(function (_shopService_) {
    shopService = _shopService_;
  }));

  it('should do something', function () {
    expect(!!shopService).toBe(true);
  });

});
