const express = require('express');
const router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  const galleryName = 'home'
  const imageNames = []
  fs.readdirSync(`./public/images/${galleryName}`).forEach(imageName => {
    console.log(imageName);
    imageNames.push({'imageName':imageName})
  })

  res.render('index', { title: 'Lolliepops and Rainbows', galleryImages:imageNames, gallerySelected:galleryName});
});

router.get('/gallery/:gallery', function(req, res, next) {
  const galleryName = req.params.gallery
  const imageNames = []
  fs.readdirSync(`./public/images/${galleryName}`).forEach(imageName => {
    console.log(imageName);
    imageNames.push({'imageName':imageName})
  })

  res.render('index', { title: req.params.gallery, galleryImages:imageNames, gallerySelected: galleryName }); 
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;
