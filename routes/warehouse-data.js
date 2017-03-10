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

router.get('/customers', function(req, res) {
  pool.connect(function(err, client, done){
    if(err) {
      console.log('Error connecting to database: ', err);
      res.sendStatus(500);
    } else {
      client.query('SELECT first_name, last_name FROM customers;', function(err, result){
        done();
        if(err) {
          console.log('Error making the database query: ', err);
          res.sendStatus(500);
        } else {
          res.send(result.rows);
        }
      });
    }
  });
});
// CUSTOMER VIEW
// SELECT *
// FROM customers;

router.get('/warehouse', function(req, res) {
  pool.connect(function(err, client, done){
    if(err) {
      console.log('Error connecting to database: ', err);
      res.sendStatus(500);
    } else {
      client.query('SELECT warehouse.fulfillment_days, warehouse.warehouse, products.description FROM warehouse JOIN warehouse_product ON warehouse.id = warehouse_product.warehouse_id JOIN products ON products.id = warehouse_product.product_id GROUP BY warehouse.id, products.description;', function(err, result){
        done();
        if(err) {
          console.log('Error making the database query: ', err);
          res.sendStatus(500);
        } else {
          res.send(result.rows);
        }
      });
    }
  });
});
// WAREHOUSE VIEW
// SELECT *
// FROM warehouse;

router.get('/orders', function(req, res) {
  pool.connect(function(err, client, done){
    if(err) {
      console.log('Error connecting to database: ', err);
      res.sendStatus(500);
    } else {
      client.query('SELECT order_date, description, street, city, state, zip, address_type, first_name, last_name FROM products JOIN line_items ON line_items.product_id = products.id JOIN orders ON line_items.order_id= orders.id JOIN addresses ON orders.address_id=addresses.id JOIN customers ON addresses.customer_id = customers.id;', function(err, result){
        done();
        if(err) {
          console.log('Error making the database query: ', err);
          res.sendStatus(500);
        } else {
          res.send(result.rows);
        }
      });
    }
  });
});

// ORDERS VIEW
// SELECT *
// FROM products
// JOIN line_items ON line_items.product_id = products.id
// JOIN orders ON line_items.order_id = orders.id
// JOIN addresses ON orders.address_id=addresses.id
// JOIN customers ON addresses.customer_id = customers.id;


module.exports = router;
