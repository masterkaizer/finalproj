const express = require("express");
import path from 'path';
const PORT = process.env.PORT || 3011;
const app = express();
import morgan from 'morgan';
import { urlencoded, json } from 'body-parser';
import session from 'express-session';
import passport, { initialize, session as _session } from 'config/passport';
import { connect } from "mongoose";
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
import users from "./routes/api/users";
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
import { mongoURI as db } from "./config/keys";
// Define any API routes before this runs
app.use(morgan('dev'))
app.use(
	urlencoded({
		extended: false
	})
)
app.use(json())
app.use(session({secret: self.secret,
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false, //required
  saveUninitialized: false //required
})
)

connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
  // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);



app.use(initialize())
app.use(_session()) 

app.get("*", function(req, res) {
  res.send("error 404 there is an error");
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

