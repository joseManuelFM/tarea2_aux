var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
      msn: 'Practica 2'
  });
});


module.exports = router;
