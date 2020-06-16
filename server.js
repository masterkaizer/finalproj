const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3011;
const app = express();
const db =require('./client/models');
const mongoose = require("mongoose");
const routes = require("./client/routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.send("error 404 there is an error");
});

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

