myApp.controller('WarehouseController', ['WarehouseFactory', function(WarehouseFactory){

  var self=this;

  WarehouseFactory.getWarehouses();
  self.warehousesObject = WarehouseFactory.warehousesObject;


}]);
