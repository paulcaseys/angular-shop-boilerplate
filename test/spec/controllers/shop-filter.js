'use strict';

describe('Controller: ShopFilterCtrl', function () {

  // load the controller's module
  beforeEach(module('angularBoilerplateApp'));

  var ShopFilterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShopFilterCtrl = $controller('ShopFilterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShopFilterCtrl.awesomeThings.length).toBe(3);
  });
});
