var mongoose = require('mongoose')
var Schema = mongoose.Schema


var TipoEquipoSchema = new Schema({
    descripcion:String,
    endevent:Boolean
})


var TipoEvento = mongoose.model("TipoEvento",TipoEquipoSchema)
module.exports = TipoEvento
