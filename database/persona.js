const mongoose = require("./connect");
var PERSONASCHEMA = {
    nombre :        String,
    ci :            String,
    edad :          Number,
    fechaRegistro:  Date
}

const PERSONA = mongoose.model("persona", PERSONASCHEMA);
module.exports = PERSONA;
