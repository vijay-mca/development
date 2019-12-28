const express = require('express');
const router = express.Router();
const User = require('../model/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
<<<<<<< HEAD
const Auth = require('../ValidateToken').validateToken;
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  let result={};
  let status;
            User.findOne({email}).then(user => {
              if (!user) {
                status=404;
                result.status = status;  
                result.error='User Not Found';
                return res.json(result);
=======
const validateToken = require('../util').validateToken;
const all = require('../router/getAll');
router.get('/',validateToken, all.getAll);
router.post("/login",(req, res) => {
        const { email, password } = req.body;
          let result = {};
          let status = 200;
            User.findOne({email}, (err, user) => {
              if (!err && user) {
                // We could compare passwords in our model instead of below as well
                bcrypt.compare(password, user.password).then(match => {
                  if (match) {
                    status = 200;
                    // Create a token
                    const payload = { user: user.email,role:user.role };
                    const options = { expiresIn: '2d', issuer: 'https://scotch.io' };
                    const secret = process.env.JWT_SECRET;
                    const token = jwt.sign(payload, secret, options);
    
                    result.token = token;
                    result.status = status;
                    result.result = user;
                  } else {
                    status = 401;
                    result.status = status;
                    result.error = `Authentication error`;
                  }
                  res. send(result).json(result);
                }).catch(err => {
                  status = 500;
                  result.status = status;
                  result.error = err;
                  res.json(result);
                });
              } else {
                status = 404;
                result.status = status;
                result.error = `Email Id Does't Exist`;
                res.json(result);
>>>>>>> 52cbe568048573f3e4d7ca672c32b45ae195c2f6
              }
              bcrypt.compare(password, user.password).then(match => {
                if(!match){
                  status=400;
                  result.status = status;  
                  result.error="Invalid Pasword"
                  return res.json(result);
                }
                else{
                  const payload = { id: user.id };
                  const token = jwt.sign(payload, process.env.JWT_SECRET);
                  status=200;
                  result.status = status;
                  result.token=token;
                  result.user=user;
                  return res.json(result);
                }
              })
            }).catch(err=>{
              status=400;
              result.status = status;  
              result.error=err;
              return res.json(result);
            });
          }
        );

router.post('/save', (req,res) => {
    User.findOne({email:req.body.email})
        .then(exist => { 
            if(exist) { 
                res.json('false');
            } 
            else{
    bcrypt.hash(req.body.password, 10, (err,   hash) => {
        User.create({
            firstname:req.body.firstName ,
            lastname:req.body.lastName ,
            email:req.body.email ,
            mobile:req.body.mobile ,
            password: hash
          }).then(data => {
           if (data) {
           res.json("true");
           }
         }).catch(err => {
            res.json(err);
         });
        });
    }
    });
});
<<<<<<< HEAD
router.get('/',Auth, (req, res) => {
  let result={};
  const loggedUser = req.user;
    User.findById({_id:loggedUser.id})
        .then(user=>{
          if(user){
            result.auth=true;
            result.status=200;
            result.user=user;
            return res.json(result);
          }
          else{
            result.auth=false;
            result.status=401;
            result.message='User Not Found.';
            return res.json(result);
          }
        })
        .catch(err =>{
          result.auth=false;
          result.status=404;
          result.message=err;
          return res.json(result);
        });
});

module.exports = router;
=======
module.exports = router;
>>>>>>> 52cbe568048573f3e4d7ca672c32b45ae195c2f6
