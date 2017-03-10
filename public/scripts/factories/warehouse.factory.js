myApp.factory('WarehouseFactory', ['$http', function($http) {

  var warehousesObject = { list: [] };
  var customersObject = { list: [] };
  var ordersObject = { list: [] };

  var newArray = [{warehouse: 'alpha'}, {warehouse: 'delta'}];


  function getCustomers() {
    $http({
      method: 'GET',
      url: '/warehouse-data/customers',
    }).then(function(response) {
      console.log('/customers response from factory: ', response);
      console.log('/customers response.data from factory: ', response.data);
      console.log(response.data); // .data is required because angular adds other things to the response
      customersObject.list = response.data; // you need .list or it will not return the data.
    }); // end then function response
  } // end function getTasks()

  function getWarehouses() {
    $http({
      method: 'GET',
      url: '/warehouse-data/warehouse',
    }).then(function(response) {
      console.log('/warehouse response.data from factory: ', response.data);
      console.log(response.data); // .data is required because angular adds other things to the response
      warehousesObject.list = response.data; // you need .list or it will not return the data.

      for (var i = 0; i < warehousesObject.list.length; i++){
        console.log(warehousesObject.list[i]);
      if (warehousesObject.list[i].warehouse !== newArray[0].warehouse){
        newArray.push(warehousesObject.list[i]);
      }

        // for (var j = 0; j < warehousesObject.list.length; j++) {
        //   if (warehousesObject.list[i].warehouse !== newArray[j].warehouse){
        //     newArray.push({
        //       warehouse: warehousesObject.list[i].warehouse,
        //       fulfillment_days: warehousesObject.list[i].fulfillment_days
        //     });
        //   }
        // }
    }
console.log('newArray', newArray);
    }); // end then function response
  } // end function getTasks()

  function getOrders() {
    $http({
      method: 'GET',
      url: '/warehouse-data/orders',
    }).then(function(response) {
      console.log('/orders response from factory: ', response);
      console.log('/orders response.data from factory: ', response.data);
      console.log(response.data); // .data is required because angular adds other things to the response
      ordersObject.list = response.data; // you need .list or it will not return the data.
    }); // end then function response
  } // end function getTasks()

return {
  warehousesObject: warehousesObject,
  customersObject: customersObject,
  ordersObject: ordersObject,
  getCustomers: getCustomers,
  getWarehouses: getWarehouses,
  getOrders: getOrders,
};

}]); // end myApp.factory
