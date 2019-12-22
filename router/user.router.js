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
    const saveUser = new User({
        firstname:req.body.firstname ,
        lastname:req.body.lastname ,
        email:req.body.email ,
        mobile:req.body.mobile ,
        password:req.body.password
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            req.body.password = hash;
            saveUser.save()
                    .then(() => {res.json("user Saved")})
                    .catch(err => {res.status(404).json('Error: ' + err) });
        })
    });

});
module.exports = router;