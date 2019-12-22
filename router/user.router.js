const express = require('express');
const router = express.Router();
const User = require('../model/users.model');
const bcrypt = require('bcrypt');

router.get('/', (req,res) =>{
    User.find()
        .then(user => { res.json(user); })
        .catch(err => { res,json(err) });
});

router.post('/save', (req,res) => {
    bcrypt.hash(req.body.password, 10, (err,   hash) => {
        User.create({
            firstname:req.body.firstname ,
            lastname:req.body.lastname ,
            email:req.body.email ,
            mobile:req.body.mobile ,
            password: hash
          }).then(data => {
           if (data) {
           res.json("User Saved");
           }
         }).catch(err => {
            res.json(err);
         });
        });

});
module.exports = router;