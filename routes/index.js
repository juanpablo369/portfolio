
var express = require('express');
var router = express.Router();



router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title:'Towerz-Art'});
});


module.exports = router;