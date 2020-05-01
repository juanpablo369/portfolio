
var express = require('express');
var router = express.Router();

const passport= require('passport');

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


//INDEX PAGE
router.get('/', function(req, res, next) {
  res.render('index', { title:'Towerz-Art'});
});


router.get('/signup', (req, res, next) => {
   if(req.isAuthenticated()) {
    res.render('index',{title:'TowerzArt'});
   }else{
    res.render('signup', {title:'Registrate - TowerzArt'});
  }
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
})); 

router.get('/signin', (req, res, next) => {
   if(req.isAuthenticated()) {
    res.render('index',{title:'TowerzArt'});
   }else{
  res.render('signin',{title:'Accede - TowerzArt'});
   }
});


router.post('/signin', passport.authenticate('local-signin', {
  successRedirect: '/profile',
  failureRedirect: '/signin',
  failureFlash: true
}));

router.get('/profile',isAuthenticated, (req, res, next) => {
  res.render('profile',{ title:'Towerz-Art'});
});
router.get('/muro',isAuthenticated, (req, res, next) => {
  res.render('muro',{ title:'Towerz-Art'});
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});


function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/')
}

module.exports = router;