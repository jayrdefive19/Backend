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

/*get current user appointment data*/
router.patch('/getapp', function(req, res, next) {
  connection.query(`SELECT * FROM appointment WHERE user_id = ('${req.body.user_id}')`, (error, results, fields) => {
    if (error){throw error} 
    res.send(results);
    console.log(results);
  }
  )
})

// get all doctor
router.get('/doctor', function(req, res, next) {
  connection.query(`SELECT * FROM veterinary`, (error, results, fields) => {
    if (error) throw error;
    res.send({results});    
  })
});

/*create doctors account */
router.patch('/create', function(req, res, next) {
  connection.query(`INSERT INTO veterinary (doctor,email,password,specialty,education,address,birthday,gender) VALUES('${req.body.doctor}','${req.body.email}','${req.body.password}','${req.body.specialty}','${req.body.education}','${req.body.address}','${req.body.birthday}','${req.body.gender}')`, (error, results, fields) => {
    if (error){throw error} 
    res.send({results});
  }
  )
})

//delete doctor
router.delete('/doctor/:id', function(req, res, next) {
  connection.query(`DELETE FROM veterinary WHERE id = ('${req.params.id}')`, (error, results, fields) => {
    if (error) throw error;
    res.send({results});    
  })
})




  /*create pet profile */
  router.patch('/petcreate', function(req, res, next) {
    connection.query(`INSERT INTO pets (petname,species,breed,sex,birthplace,birthday,color,pic,user_id) VALUES('${req.body.petname}','${req.body.species}','${req.body.breed}','${req.body.sex}','${req.body.birthplace}','${req.body.birthday}','${req.body.color}','${req.body.pic}','${req.body.user_id}')`, (error, results, fields) => {
      if (error){throw error} 
      res.send({results});
    }
    )
  })
    
    


module.exports = router;