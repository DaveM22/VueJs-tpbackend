const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
var Equipo = require('../models/equipo');
var TipoEvento = require('../models/tipoevento')



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

app.post('/tipoeventos',(req,res) => {
    var db = req.db;
    var descripcion = req.body.descripcion;
    var endevent = req.body.endevent;
    var new_tipoevento = new TipoEvento({
        descripcion:descripcion,
        endevent:endevent
    })

    new_tipoevento.save(function(error){
       if (error){
           console.log(error)
       } 
       res.send({
           success: true,
           message: 'Agregado nuevo tipo de evento correctamente'
       })
    })

})


//cambios
app.get('/equipos',(req,res) =>{
    Equipo.find({}, function(err, equipos) {
        var equipoMap = [];
        equipos.forEach(function(equipo) {
          equipoMap.push(equipo)
        });
        console.log(equipoMap);
        res.send(equipoMap);
    })
    
})


app.get('api/tipoeventos/', (req,res) =>{
    TipoEvento.find({},function(err,tipoeventos){
        var TipoEquipoMap = [];
        tipoeventos.forEach(function(tipoevento){
            TipoEquipoMap.push(equipo)
        });
        console.log(TipoEquipoMap);
        res.send(TipoEquipoMap);
    })
})

app.get('/equipo/:id', (req,res) =>{
    var db = req.db;
    Equipo.findById(req.params.id,'nombre', function (error,equipo){
        if(error){console.error(error)}
        res.send(equipo)

    })
})

app.get('/tipoeventos/:id', (req,res) => {
    var db = req.db;
    TipoEvento.findById(req.params.id,('descripcion,endevent'),function(error,tipoevento){
        if(error){console.error(error)}
        res.send(tipoevento)
    })
})

app.put('/equipos/:id', (req,res) => {
    var db = req.db;

    Equipo.findById(req.params.id,'nombre',function (error,equipo){
        if (error) {console.error(error);}

        equipo.nombre = req.body.nombre
        equipo.save(function(error){
            if(error){
                console.log(error)
            }
            res.send({
                success:true
            })
        })
    })
})



app.put('/tipoeventos/:id',(req,res) => {
    var db = req.db;
    TipoEvento.findById(req.params.id,('descripcion,endevent'),function(error,tipoevento){
        if (error) {console.error(error);}

        tipoevento.descripcion = req.body.descripcion;
        tipoevento.endevent = redq.body.endevent;
        tipoevento.save(function(error){
            if (error){
                console.log(error)
            }
            res.send({
                success:true
            })    
        })
    })

})




app.listen(3000);





