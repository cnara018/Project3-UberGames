const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var request = require("request")
const bcrypt = require('bcrypt')
var db = require("./models");
const PORT = process.env.PORT || 3001;
const app = express();
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

