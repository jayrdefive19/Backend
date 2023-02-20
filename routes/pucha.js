var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'phdogtor'
});

connection.connect();

router.delete('/userx/:id', function(req, res, next) {
    connection.query(`DELETE FROM user WHERE id = ('${req.params.id}')`, (error, results, fields) => {
      if (error) throw error;
      res.send({results});    
    })
  })
  router.get('/doctor', function(req, res, next) {
    connection.query(`SELECT * FROM veterinary`, (error, results, fields) => {
      if (error) throw error;
      res.send({results});    
    })
  });
  


  module.exports = router;