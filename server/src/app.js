const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
var Equipo = require('../models/equipo');



const app = express();
app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dbequipos');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

app.post('/equipos',(req,res) => {
  var db = req.db;
  var nombre = req.body.nombre;
  var new_equipo = new Equipo({
      nombre: nombre
  })
  
  new_equipo.save(function (error){
      if (error) {
          console.log(error)
      }
      res.send({
          success: true,
          message: 'Agregado equipo correctamente'
      })
  })
})
//cambios
app.get('/equipos',(req,res) =>{
    Equipo.find({}, function(err, equipos) {
        var equipoMap = {};
        equipos.forEach(function(equipo) {
          equipoMap[equipo._id] = equipo;
        });
        console.log(equipoMap);
        res.send(equipoMap);
    })
    
})


app.listen(5000);





