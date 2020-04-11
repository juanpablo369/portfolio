
var express = require('express');
var router = express.Router();



var cases= "7257";
/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"315",
  	muertosP:"338",
  	recuperados:"411",
  	descartados:"6944",
  	sospechosos:"5137",
  	pruebas:"22649",
  	aislamiento:"6123",
  	estables:"224",
  	reservado:"184",

  	guayas:"5290",
  	pichincha:"606",
  	rios:"227",
  	azuay:"154",
  	manabí:"204",
  	loja:"59",
  	chimborazo:"65",
  	bolívar:"33",
  	cañar:"94",
  	morona:"19",
  	sucumbios:"33",
  	imbabura:"32",
  	tsachilas:"55",
  	oro:"149",
  	esmeraldas:"31",
  	elena:"74",
    cotopaxi:"36",
  	tungurahua:"36",
  	galapagos:"11",
  	carchi:"23",
  	pastaza:"13",
  	zamora:"4",
  	napo:"4",
  	orellana:"5",

  	mguayas:"2534",
  	mpichincha:"395",
  	mrios:"158",
  	mazuay:"100",
  	mmanabí:"88",
  	mloja:"27",
  	mchimborazo:"46",
  	mbolívar:"27",
  	mcañar:"59",
  	mmorona:"11",
  	msucumbios:"30",
  	mimbabura:"21",
  	mtsachilas:"36",
  	moro:"58",
  	mesmeraldas:"17",
  	melena:"52",
    mcotopaxi:"23",
  	mtungurahua:"22",
  	mgalapagos:"11",
  	mcarchi:"12",
  	mpastaza:"12",
  	mzamora:"2",
  	mnapo:"2",
  	morellana:"4",
  	
  	 });
});


module.exports = router;