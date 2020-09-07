const express = require("express");
const router = express.Router();
const db = require("../models");

router.post('/new', (req, res) => {
    db.User.create({
        username: req.body.username
    }).then(newUser => res.send(newUser));
});
router.delete("/delete/:id", (req, res) => {
  db.Profile.destroy({
    where: {
      UserId: req.params.id
    }
  }).then(() => res.send("success")).catch(err =>{
    console.error('bad things happened: ', err);
  });
  db.Post.destroy({
    where: {
      UserId: req.params.id
    }
  }).then(() => res.send("success")).catch(err =>{
    console.error('bad things happened: ', err);
  });
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => res.send("success")).catch(err =>{
      console.error('bad things happened: ', err);
    });
  });
router.get("/all", (req, res) => {
    db.User.findAll({
        include: [db.Profile, db.Post]
    }).then(allUsers => res.send(allUsers));
});

module.exports = router;
