var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tiger123",
  database: "mkjhadatabase"

});
con.connect(function(err) {
  if (err) throw err;
con.query("SELECT * FROM  users", function (err, result, fields) {
    if (err) throw err;
 console.log(result);
  });
});
