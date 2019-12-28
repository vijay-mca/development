const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
ExtractJwt = passportJWT.ExtractJwt;
require('dotenv').config();

const PORT = process.env.PORT || 5000;

mongoose.Promise.global;
const uri = process.env.ATLAS_URI || 'mongodb+srv://vijay:vijay-mongo@cluster0-x42br.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false,useCreateIndex:true});
const connection = mongoose.connection;
connection.on('error',console.error.bind(console,'connection error'))
connection.once('open',() => {
    console.log('Mongo Server Running On ATLAS');
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(require('express-session')({ secret: 'vijay', resave: false, saveUninitialized: false }));

const User = require('./model/users.model');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  };

const strategy = new JwtStrategy(opts, (payload, next) => {
    User.findOne({_id: payload.id })
    .then(res => {
        next(null, res);
    });
    });
passport.use(strategy);
app.use(passport.initialize());

app.use('/users', require('./router/user.router'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT,() => {
    console.log(`Node Server Running On PORT: ${PORT}`);
});
