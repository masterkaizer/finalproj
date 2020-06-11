const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3011;
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const session = require('express-session');
const passport = require('./client/server/passport');
const dbConnection = require('./client/server/database')
const MongoStore = require('connect-mongo')(session)
const user = require('./client/server/routes/user')

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(session({secret: self.secret,
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false, //required
  saveUninitialized: false //required
})
)

app.use(passport.initialize())
app.use(passport.session()) 

app.get("*", function(req, res) {
  res.send("error 404 there is an error");
});

app.use('/client/server/database/models/user', user)
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

