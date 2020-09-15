/*
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var request = require("request")
// const speakeasy = require("speakeasy");
// const qrcode = require("qrcode");
const bcrypt = require('bcrypt')
// Requiring our models for syncing
var db = require("./models");
const PORT = process.env.PORT || 3001;
const app = express();
// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// =============================================================
const postRoute = require("./routes/post-route.js");
app.use("/api/posts" , postRoute);
const profileRoutes = require("./routes/profile-route.js");
app.use("/api/profiles", profileRoutes);
const userRoutes = require("./routes/user-route");
app.use("/api/users", userRoutes);

app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
*/



const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const users = require('./routes/api/users');
const uploads = require('./routes/api/uploads');
const posts = require('./routes/api/posts');
const session = require('express-session');
const cors = require('cors');
const passport = require("passport");
const localStrategy = require('passport-local').Strategy;
const publicDirectory= path.join(__dirname,'client', 'build');
console.log(publicDirectory);
const port = process.env.PORT || 5000;

//Set Storage
app.use(cors());

//app.use(express.static(publicDirectory));
//app.use(express.static('./public'));
app.use(express.static('client/build'));

//Handles Express Sessions
app.use(session({
    secret:'cats',
    saveUninitialized:false,
    resave:false
}));


app.use(bodyParser.json());
app.use(cookieParser())
//Passport
app.use(passport.initialize());
app.use(passport.session());

//Using Routes
app.use('/api/users', users);
app.use('/api/uploads',uploads);
app.use('/api/post',posts);

//DB CONFIG
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose.connect(db)
    .then(()=> console.log('Connected to MongoDB'))
    .catch(err => console.log(err.message));


app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
app.get('*',(req, res)=>{
    res.sendFile(path.join(publicDirectory,'index.html'));
});

app.listen(port,()=>{
    console.log(`Server in running on PORT ${port}` );
});