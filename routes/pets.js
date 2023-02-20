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

// get all pet
router.get('/allpets', function(req, res, next) {
    connection.query(`SELECT * FROM pets`, (error, results, fields) => {
      if (error) throw error;
      res.send({results});    
    })
});
  
  /*get current pet data*/
  router.patch('/mypet', function(req, res, next) {
    connection.query(`SELECT * FROM pets WHERE user_id=('${req.body.user_id}')`, (error, results, fields) => {
      if (error){throw error} 
      res.send(results);
      console.log(results);
    }
    )
  })
  
  
module.exports = router;