'use strict';

describe('Controller: ShopItemCtrl', function () {

  // load the controller's module
  beforeEach(module('angularBoilerplateApp'));

  var ShopItemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShopItemCtrl = $controller('ShopItemCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShopItemCtrl.awesomeThings.length).toBe(3);
  });
});
