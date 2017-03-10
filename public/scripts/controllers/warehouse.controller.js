myApp.controller('WarehouseController', ['WarehouseFactory', function(WarehouseFactory){

  var self=this;

  WarehouseFactory.getWarehouses();
  self.warehousesObject = WarehouseFactory.warehousesObject;

  console.log('warehousesObject.list', self.warehousesObject.list);

  console.log('warehousesObject length', self.warehousesObject.list.length);



// forIterate();

// function forIterate() {
  // WarehouseFactory.getWarehouses().then(function(response) {



  // });


}]);
