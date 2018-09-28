const User = require('../models/User');
const express = require('express');
const router = express.Router();



router.post('/signup', (req, res, next) => {

  User.find({
    email: req.body.emai1
  }, (err, previousUsers) => {
    if(err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if(previousUsers.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Account already exists.'
      });
    }
    User.find({
      username: req.body.username
    }, (err, previousUsers) => {
      if(err) {
        return res.send({
          success: false,
          message: 'Error: Account already exists.'
        });
      }
    })

    const newUser = new User({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password
    });

    newUser.password = newUser.generateHash(req.body.password);

    newUser.save((err, user) => {
      if(err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      return res.send({
        success: true,
        message: 'Signed up'
      });
    })
  });
});

module.exports = router;
