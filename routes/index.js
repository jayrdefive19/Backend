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



/*login to admin */
router.post('/admin', function(req, res, next) {
  connection.query(`SELECT * FROM admin WHERE username = ('${req.body.username}') AND password=('${req.body.password}')`, (error, results, fields) => {
    if (error){throw error} 
    res.send(results);
    console.log(results);
  }
  )
})

/*login to admin */
router.post('/vet', function(req, res, next) {
  connection.query(`SELECT * FROM veterinary WHERE email = ('${req.body.email}') AND password=('${req.body.password}')`, (error, results, fields) => {
    if (error){throw error} 
    res.send(results);
    console.log(results);
  }
  )
})


/*get current vetuser data*/
router.patch('/vetuser', function(req, res, next) {
  connection.query(`SELECT * FROM user WHERE id = ('${req.body.id}')`, (error, results, fields) => {
    if (error){throw error} 
    res.send(results);
    console.log(results);
  }
  )
})


/*create account */
router.patch('/user', function(req, res, next) {
  connection.query(`INSERT INTO user (username,password,email,first_name,last_name,address) VALUES('${req.body.username}','${req.body.password}','${req.body.email}','${req.body.first_name}','${req.body.last_name}','${req.body.address}')`, (error, results, fields) => {
    if (error){throw error} 
    res.send({results});
  }
  )
})

/*login to account */
router.post('/user', function(req, res, next) {
  connection.query(`SELECT * FROM user WHERE username = ('${req.body.username}') AND password=('${req.body.password}')`, (error, results, fields) => {
    if (error){throw error} 
    res.send(results);
    console.log(results);
  }
  )
})



/*get current user data*/
router.patch('/usera', function(req, res, next) {
  connection.query(`SELECT * FROM user WHERE id = ('${req.body.id}')`, (error, results, fields) => {
    if (error){throw error} 
    res.send(results);
    console.log(results);
  }
  )
})


/*PASSWORD PROTECT*/
const checkUser = (req,res,next) => {
  
  connection.query(`SELECT * FROM user WHERE id = ${req.query.id || req.query.user}`, (error, results, fields) => {
    if (results.length > 0){
      next();
    }
    else {
      res.send('Not a valid user')
    }
})
}


router.get('/user', function(req, res, next) {
  connection.query(`SELECT * FROM user`, (error, results, fields) => {
    if (error) throw error;
    res.send({results});    
  })
});

router.get('/admin', function(req, res, next) {
  connection.query(`SELECT * FROM admin`, (error, results, fields) => {
    if (error) throw error;
    res.send({results});    
  })
});

router.get('/appointments', function(req, res, next) {
  connection.query(`SELECT * FROM appointment`, (error, results, fields) => {
    if (error) throw error;
    res.send({results});    
  })
});


module.exports = router;