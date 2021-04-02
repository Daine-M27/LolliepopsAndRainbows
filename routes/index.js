const express = require('express');
const router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  const allImages = [
    {
      'folder': 'folderName',
      'imageName': 'exampleName'
    }
  ] 

  res.render('index', { title: 'Express', allImages});
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
  res.render('index', { title: 'about' });
});

module.exports = router;
