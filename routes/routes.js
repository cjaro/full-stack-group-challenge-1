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
