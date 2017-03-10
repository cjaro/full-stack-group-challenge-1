myApp.controller('OrderController', ['WarehouseFactory', function(WarehouseFactory){

  var self = this;

  self.getOrderData();
  
  self.getOrderData = function (){
    WarehouseFactory.getOrders();
  }

}])
