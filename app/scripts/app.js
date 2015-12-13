'use strict';

/**
 * @ngdoc overview
 * @name angularBoilerplateApp
 * @description
 * # angularBoilerplateApp
 *
 * Main module of the application.
 */
angular
  .module('angularBoilerplateApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/shop', {
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl',
        controllerAs: 'shop'
      })
      .when('/shop/:filterType', {
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl',
        controllerAs: 'shop'
      })
      .when('/shop/item/:filterType', {
        templateUrl: 'views/shop-item.html',
        controller: 'ShopItemCtrl',
        controllerAs: 'shopItem'
      })
      .when('/item', {
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl',
        controllerAs: 'shop'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
