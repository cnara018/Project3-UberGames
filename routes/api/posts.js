const express = require('express');
const router = express.Router();
const Post = require('../../models/posts');
const nodemailer = require('nodemailer');


router.get('/all', (req, res) => {
    Post.find().then(posts => res.send(posts));
});

router.get('/recent',(req, res)=>{
    Post.find()
        .sort({_id:-1})
        .limit(4)
        .then(posts => res.send(posts));

});

router.get('/count/:platform',(req, res) => {
    Post.find({city: req.params.city}).count()
        .then(docs => {
            res.json(docs);
        })
        .catch(err => {
            res.json(err);
        })
});
router.get('/count/condition/:condition',(req, res) => {
    Post.find({for: req.params.for}).count()
        .then(docs => {
            res.json(docs);
        })
        .catch(err => {
            res.json(err);
        })
});
router.post('/contact',(req, res)=>{

    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: account.user, // generated ethereal user
                pass: account.pass // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: `${req.body.email}`, // sender address
            to: `${req.body.reciever}`, // list of receivers
            subject: 'Hello ✔', // Subject line
            text: `${req.body.message}`, // plain text body
            html: `<br/><p>Please Contact on</p><br/><span>Number: ${req.body.contactNumber} Email: ${req.body.email}</span>` // html body
        };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.sendStatus(200).json({message:'Email Sent Successfully'});

        });
    });
});

router.get('/my/:email', (req, res)=>{
    Post.find({email: req.params.email})
        .then(docs => res.json(docs))
        .catch(err => res.sendStatus(400).json({failed: 'Error While Getting your Posts'}));

});

router.delete('/my/delete/:id',(req, res)=>{
    Post.findOneAndDelete(req.params.id)
        .then(docs => res.json(docs))
        .catch( err => res.sendStatus(400).json({failed:'Error While Deleting'}));
});
module.exports = router;