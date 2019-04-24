var express = require('express');
var router = express.Router();

var PERSONA = require('../database/persona');

router.get('/', (req, res) => {
    var params = req.query;
    var limit = 10;
    if (params.limit != null) {
        limit = parseInt(params.limit);
    }
    PERSONA.find({}).limit(limit).exec((err, docs) => {
    res.status(200).json(docs);
    });
});

router.post('/', async(req, res) => {
    var params = req.body;
    params["fechaRegistro"] = new Date();
    var persona = new PERSONA(params);
    await persona.save();
    res.status(200).json("guardado exitoso");
});

router.patch('/', async(req, res) => {
    if (req.query.id == null) {
        res.status(300).json({
            msn: "id no encontrado"
        });
        return;
    }
    var id = req.query.id;
    var params = req.body;
    await PERSONA.findOneAndUpdate({_id: id}, params);
    res.status(200).json("modificacion exitosa");
});

router.delete('/', async(req, res) => {
    if (req.query.id == null) {
        res.status(300).json({
            msn: "id no encontrado"
        });
        return;
    }
    await PERSONA.remove({_id: req.query.id});
    res.status(300).json("Eliminacion exitosa");
});

module.exports = router;
