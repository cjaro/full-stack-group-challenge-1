myApp.controller('OrderController', ['WarehouseFactory', function(WarehouseFactory){

  var self = this;


  self.convertDate = function(orderDate){
    orderDate = orderDate.slice(0, 10);
    return orderDate;
  }

  WarehouseFactory.getOrders();

  self.ordersObject = WarehouseFactory.ordersObject;

}])
