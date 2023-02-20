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

router.patch('/appoint', function(req, res, next) {
  connection.query(`INSERT INTO appointment (doctor,date,time,reason,user_id) VALUES('${req.body.doctor}','${req.body.date}','${req.body.time}','${req.body.reason}','${req.body.user_id}'`, (error, results, fields) => {
    if (error){throw error} 
    res.send({results});
    console.log
  }
  )
})


router.get('/appointments', function(req, res, next) {
  connection.query(`SELECT * FROM appointment`, (error, results, fields) => {
    if (error) throw error;
    res.send({results});    
  })
});



  

  


module.exports = router;