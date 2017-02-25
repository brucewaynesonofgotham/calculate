var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'Alexandra',
  password : 'qwerty',
  database : 'car'

});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.query('SELECT * FROM car_model',function(err,rows){
  if(err) throw err;

  for (var i = 0; i < rows.length; i++) {
    console.log(rows[i].name);
  };
});



con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
