const express = require("express");
const router = express.Router();
const User = require("../model/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Auth = require("../ValidateToken").validateToken;

router.get("/", Auth, (req, res) => {
  let result = {};
  const loggedUser = req.user;
  User.findById({
    _id: loggedUser.id
  })
    .then(user => {
      if (user) {
        result.auth = true;
        result.status = 200;
        result.user = user;
        return res.json(result);
      } else {
        result.auth = false;
        result.status = 401;
        result.message = "User Not Found.";
        return res.json(result);
      }
    })
    .catch(err => {
      result.auth = false;
      result.status = 404;
      result.message = err;
      return res.json(result);
    });
});

router.post("/save", (req, res) => {
  User.findOne({
    email: req.body.email
  }).then(exist => {
    if (exist) {
      res.json("false");
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        User.create({
          firstname: req.body.firstName,
          lastname: req.body.lastName,
          email: req.body.email,
          mobile: req.body.mobile,
          password: hash
        })
          .then(data => {
            if (data) {
              res.json("true");
            }
          })
          .catch(err => {
            res.json(err);
          });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  let result = {};
  let status;
  User.findOne({
    email
  })
    .then(user => {
      if (!user) {
        status = 404;
        result.status = status;
        result.error = "User Not Found";
        return res.json(result);
      }
      bcrypt.compare(password, user.password).then(match => {
        if (!match) {
          status = 400;
          result.status = status;
          result.error = "Invalid Pasword";
          return res.json(result);
        } else {
          const payload = {
            id: user.id
          };
          const token = jwt.sign(payload, process.env.JWT_SECRET);
          status = 200;
          result.status = status;
          result.token = token;
          result.user = user;
          return res.json(result);
        }
      });
    })
    .catch(err => {
      status = 400;
      result.status = status;
      result.error = err;
      return res.json(result);
    });
});

router.post("/update", Auth, (req, res) => {
  const loggedUser = req.user;
  let data = {};
  User.findOneAndUpdate({ _id: loggedUser.id }, req.body)
    .then(result => {
      data.status = 200;
      data.message = "updated";
      res.json(data);
    })
    .catch(err => {
      data.status = 404;
      data.message = err;
      res.json(data);
    });
});

module.exports = router;
