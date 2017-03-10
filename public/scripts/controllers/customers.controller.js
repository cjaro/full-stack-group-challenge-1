myApp.controller('CustomerController', ['WarehouseFactory', function(WarehouseFactory){
  console.log('customer controller loaded');
  var self = this;

  WarehouseFactory.getCustomers();
  self.customersObject = WarehouseFactory.customersObject;


  // self.dummyCustomers = [
  //   {
  //     first_name: 'Carolyn',
  //     last_name: 'Sucks'
  //   },
  //   {
  //     first_name: 'Donald',
  //     last_name: 'Bagel'
  //   }
  // ];

}]);
