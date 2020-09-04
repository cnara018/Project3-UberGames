const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
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
const postController = require("./controllers/post-controller.js");
const conditionController = require("./controllers/condition-controller.js");
const viewController = require("./controllers/view-controller.js");
const searchController = require("./controllers/search-controller.js");
app.use(express.static("public"));

app.use(postController);
app.use(conditionController);               
app.use(viewController);
app.use(searchController);


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

