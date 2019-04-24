var express = require('express');
var router = express.Router();

const MASCOTA = require('../database/mascota');

router.get("/", (req, res) => {
    var params = req.query;
    var limit = 10;
    if (params.limit != null) {
        limit = parseInt(params.limit);
    }
    MASCOTA.find({}).limit(limit).exec((err, docs) => {
    res.status(200).json(docs);
    });
});

router.post('/', async(req, res) => {
    var params = req.body;
    var mascota = new MASCOTA(params);
    await mascota.save();
    res.status(200).json("guardado exitoso");
});

router.patch("/", async(req, res) => {
    if (req.query.id == null) {
        res.status(300).json({
            msn: "id no encontrado"
        });
        return;
    }
    var id = req.query.id;
    var params = req.body;
    await MASCOTA.findOneAndUpdate({_id: id}, params);
    res.status(200).json("modificacion exitosa");
});

router.delete("/", async(req, res) => {
    if (req.query.id == null) {
        res.status(300).json({
            msn: "id no encontrado"
        });
        return;
    }
    await MASCOTA.remove({_id: req.query.id});
    res.status(300).json("Eliminacion exitosa");
});

module.exports = router;
