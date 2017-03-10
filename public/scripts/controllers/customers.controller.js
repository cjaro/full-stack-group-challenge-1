myApp.controller('CustomerController', ['WarehouseFactory', function(WarehouseFactory){
  console.log('customer controller loaded');
  var self = this;

  WarehouseFactory.getCustomers();
  self.customersObject = WarehouseFactory.customersObject;

}]);
