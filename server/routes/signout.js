const User = require('../models/User');
const express = require('express');
const router = express.Router();

router.post('/signout', (req, res, next) => {
  const { query } = req;
  const { token } = query;

  UserSession.findOneAndUpdate({
    _id: token,
    isDeleted: false
  }, {
    $set: {
      isDeleted:true
    }
  }, null, (err, sessions) => {
    if(err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }
    return res.send({
      success: true,
      message: 'Good'
    });
  });
});

module.exports = router;
