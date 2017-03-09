var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'warehouse',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);


// WAREHOUSE VIEW
// SELECT *
// FROM warehouse;

// CUSTOMER VIEW
// SELECT *
// FROM customers;

// ORDERS VIEW
// SELECT *
// FROM products
// JOIN line_items ON line_items.product_id = products.id
// JOIN orders ON line_items.order_id = orders.id
// JOIN addresses ON orders.address_id=addresses.id
// JOIN customers ON addresses.customer_id = customers.id;
