const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/new", (req, res) => {
    console.log(req.body)
    db.Post.create({
        trade: req.body.user.trade,
        price: req.body.user.price,
        conditionofgame: req.body.user.conditionofgame,
        gamedescription: req.body.user.gamedescription,
        developer: req.body.user.developer,
        esrbrating: req.body.user.esrbrating,
        genre: req.body.user.genre,
        platform: req.body.user.platform,
        gamename: req.body.user.gamename,
        imageurl: req.body.user.imageurl,
        UserId: req.body.user.UserId
    }).then(newPost => res.send(newPost));
});

router.get("/find/:id", (req, res) => {
    db.Post.findAll({
        where: { UserId: req.params.id },
        include: [db.User]
    }).then(post => res.send(post));
});

module.exports = router;
