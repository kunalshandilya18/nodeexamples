
var express = require("express");
var app     = express();
const router = express.Router();

var path    = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var con = mysql.createConnection({
 host: "localhost",
  user: "root",
  password: "tiger123",
  database: "mkjhadatabase"

  });
   app.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/login.html'));
});


     app.post('/login',function(req,res){

     var  name     = req.body.name;
      var  password= req.body.password;
    
     var sql = `INSERT INTO  login (name, password  ) VALUES ('${name}', '${password}' )`;

  res.write('You sent the name "' + req.body.name+'".\n');
  res.write('You sent the Email "' + req.body.password+'".\n');
  res.end()

   console.log("User dat is inserted successfully "); 
   
   con.connect(function(err) {
       
       
      if (err) throw err;
     con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
     res.end();

    });
       console.log(" data   inserted successfully "); 

  });


})
app.listen(4000);
console.log("Running at Port 4000");



