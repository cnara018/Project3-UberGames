const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Create Schema

const PostSchema = new  Schema({
    posttitle: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    developer: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    priceUnit:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    esrb:{
        type: String,
        required: true
    },
    platform:{
        type: String,
        required: false
    },
    
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = Users = mongoose.model('posts', PostSchema);