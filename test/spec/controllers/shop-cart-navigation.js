'use strict';

describe('Controller: ShopCartNavigationCtrl', function () {

  // load the controller's module
  beforeEach(module('angularBoilerplateApp'));

  var ShopCartNavigationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShopCartNavigationCtrl = $controller('ShopCartNavigationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShopCartNavigationCtrl.awesomeThings.length).toBe(3);
  });
});
