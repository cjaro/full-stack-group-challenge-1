myApp.controller('CustomerController', ['$http', 'WarehouseFactory', function($http, WarehouseFactory){
  console.log('customer controller loaded');
  var self = this;

  // self.customersList = WarehouseFactory.allCustomers; //placeholder

  self.dummyCustomers = [
    {
      first_name: Carolyn,
      last_name: Sucks
    },
    {
      first_name: Donald,
      last_name: Bagel
    }
  ];

}]);
