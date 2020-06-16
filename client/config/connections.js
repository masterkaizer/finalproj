var mysql = require("mysql");

const options = {
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Physics212!",
  database: "Recommendation"
}

var connection = mysql.createConnection(options);

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});
