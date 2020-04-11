require("dotenv").config();

var createError = require('http-errors');
const express = require('express');
const bodyParser = require("body-parser");
const webpush = require("web-push");
const morgan = require("morgan");

var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require("mongoose");


var app = express();


// database//
const  database  = {
    URI: 'mongodb+srv://thordevman:uGrRyuEp8,g$4jK@cluster0-e1gsp.mongodb.net/test?retryWrites=true&w=majority'
}
  
mongoose.connect(database.URI, {
  useNewUrlParser: true    
})
  .then(db => console.log('base de datos conectada'))
  .catch(err => console.log(err));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
var indexRouter = require('./routes/index');
app.use('/', indexRouter);


//////////MIDLEWARES
//Web-Push
const publicVapidKey =
  "BJ7mU7u4wZY1E87vlMKjX5D6isUWw0qFsEv1sGh-kpWMOrt9xS5cONGAqe4B3nXYh_EZ0KZ6RUdNPYbALDOpmEw";
const privateVapidKey = "LHrk_X2oYozMSJDenUWcfcvqViCAG3Mn_JxW7i6B0mU";

webpush.setVapidDetails(
  "mailto:thor.devman@gmail.com",
  publicVapidKey,
  privateVapidKey
);

// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({
		title: "Notificación de Pablo",
		message: "Hello Nigga"+" son: "+cases+" casos confirmados"
	});

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
});

//////////



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
