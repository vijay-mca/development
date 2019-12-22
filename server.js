const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 8000;

mongoose.Promise.global;
const uri = process.env.ATLAS_URI || 'mongodb+srv://vijay:vijay-mongo@cluster0-x42br.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false,useCreateIndex:true});
const connection = mongoose.connection;
connection.on('error',console.error.bind(console,'connextion error'))
connection.once('open',() => {
    console.log('Mongo Server Running On ATLAS');
});

app.use(cors());

app.listen(PORT,() => {
    console.log(`Node Servr Running On PORT: ${PORT}`);
});
