const express = require('express');
const dotenv = require('dotenv').config({path: '.env'});
const mail = require('../utilities/mail')
const router = express.Router();

/* GET Email page. */
router.get('/', function (req, res, next) {
    res.render('email', { title: 'Contact Us' });
  })
  
router.post('/', function(req, res, next) {
    const emailAddr = process.env.EMAIL_ADDRESS
    mail({
        emailAddress: emailAddr,
        subject: "Lollipops & Rainbows Contact Form",
        text: `
        Message From: ${req.body.firstName}
        Email Address: ${req.body.emailAddress}
        Message Body: ${req.body.message}`
      })
    .then(() => {
        res.render("contactSubmit", { title: "Message Sent", message: "Thank you for your support!" });
    }).catch((err) => {
        console.log(err)
        res.render("error", { title: "Error", message: err, emailAddr: emailAddr });
    })
    
})  
  
  
  
  
module.exports = router;