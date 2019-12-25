const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../model/users.model');

module.exports = {
  getAll: (req, res) => {
        const payload = req.decoded;
        if (payload && payload.user === 'user') {
          User.find({}, (err, users) => {
            if (!err) {
              result.status = status;
              result.error = err;
              result.result = users;
            } else {
              status = 500;
              result.status = status;
              result.error = err;
            }
            res.json(result);
          });
        } else {
          status = 401;
          result.status = status;
          result.error = `Authentication error`;
          res.json(result);
        }
      } 
    };