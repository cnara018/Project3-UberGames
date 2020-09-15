const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Post = require('../../models/post');

const storage = multer.diskStorage({
    destination: './client/public/uploads/',
    filename: function (req, file, cb) {
        cb(null,file.originalname);
    }
});

const upload = multer({
    storage: storage
}).single("image");

router.post('/image', (req, res) => {
    upload(req, res, (err) => {
        if (err){
            console.log(err);
        }
        if(!err)
            return res.send(200).end();
    });
});
router.post('/post',(req, res)=>{

    const newPost = new Post({
        posttitle:req.body.posttitle,
        condition:req.body.condition,
        genre:req.body.genre,
        developer: req.body.developer,
        price:  req.body.price,
        priceUnit:req.body.priceUnit,
        contact:req.body.contact,
        email:req.body.email,
        image:req.body.image,
        esrb:req.body.esrb,
        platform:req.body.platform,
        description: req.body.description
    });
    newPost.save().then(docs => res.json(docs));
});
module.exports = router;