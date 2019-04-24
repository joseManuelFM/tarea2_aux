const mongoose = require('./connect');
var MASCOTASCHEMA = {
    nombre:         String,
    descripcion :   String,
    tipo :          String
}

const MASCOTA = mongoose.model("mascota", MASCOTASCHEMA);

module.exports = MASCOTA;
