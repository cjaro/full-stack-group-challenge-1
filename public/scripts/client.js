var myApp = angular.module('warehouseApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/warehouse', {
      templateUrl: '/views/warehouse.html',
      controller: 'WarehouseController',
      controllerAs: 'wc'
    })
    .when('/customers', {
      templateUrl: '/views/customers.html',
      controller: 'CustomerController',
      controllerAs: 'cc'
    })
    .when('/orders', {
      templateUrl: '/views/orders.html',
      controller: 'OrderController',
      controllerAs: 'oc'
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
