import express from 'express';
import cors from 'cors';

var bodyParser = require('body-parser')

var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'Alexandra',
  password : 'qwerty',
  database : 'car'

});
var years = [];
var sortedYears = [];
var marks = [];
var sortedMarks = [];
var models = [];
var sortedModels = [];
var modifications = [];
var sortedModifications = [];
var series = [];
var sortedSeries = [];
var types = [];
var sortedTypes = [];
con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.query('SELECT * FROM car_generation',function(err,rows){
  if(err) throw err;

  for (var i = 0; i < rows.length; i++) {
    years.push(rows[i].year_begin);
  }
  years.sort();

  for (i = 0; i < rows.length; i++){
    if (years[i] != years[i+1]){
      sortedYears.push(years[i])
    }
  }

});

con.query('SELECT * FROM car_mark',function(err,rows){
  if(err) throw err;

  for (var i = 0; i < rows.length; i++) {
    marks.push(rows[i].name);
  }
  marks.sort();

  for (i = 0; i < rows.length; i++){
    if (marks[i] != marks[i+1]){
      sortedMarks.push(marks[i])
    }
  }

});

con.query('SELECT * FROM car_model',function(err,rows){
  if(err) throw err;

  for (var i = 0; i < rows.length; i++) {
    models.push(rows[i].name);
  }
  models.sort();

  for (i = 0; i < rows.length; i++){
    if (models[i] != models[i+1]){
      sortedModels.push(models[i])
    }
  }

});

con.query('SELECT * FROM car_modification',function(err,rows){
  if(err) throw err;

  for (var i = 0; i < rows.length; i++) {
    modifications.push(rows[i].name);
  }
  modifications.sort();

  for (i = 0; i < rows.length; i++){
    if (modifications[i] != modifications[i+1]){
      sortedModifications.push(modifications[i])
    }
  }

});

con.query('SELECT * FROM car_serie',function(err,rows){
  if(err) throw err;

  for (var i = 0; i < rows.length; i++) {
    series.push(rows[i].name);
  }
  series.sort();

  for (i = 0; i < rows.length; i++){
    if (series[i] != series[i+1]){
      sortedSeries.push(series[i])
    }
  }

});

con.query('SELECT * FROM car_type',function(err,rows){
  if(err) throw err;

  for (var i = 0; i < rows.length; i++) {
    types.push(rows[i].name);
  }
  types.sort();

  for (i = 0; i < rows.length; i++){
    if (types[i] != types[i+1]){
      sortedTypes.push(types[i])
    }
  }

});



con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});


const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.render("years", {
      sortedYears : sortedYears
    }
  );
});

app.get('/marks', function (req, res, next) {
  res.render("marks", {
      sortedMarks : sortedMarks
    }
  );
});
app.get('/models', function (req, res, next) {
  res.render("models", {
      sortedModels : sortedModels
    }
  );
});

app.get('/modifications', function (req, res, next) {
  res.render("modifications", {
      sortedModifications : sortedModifications
    }
  );
});
app.get('/series', function (req, res, next) {
  res.render("series", {
      sortedSeries : sortedSeries
    }
  );
});
app.get('/types', function (req, res, next) {
  res.render("types", {
      sortedTypes : sortedTypes
    }
  );
});

app.post('/carData', function (req, res, next) {
  console.log(req.body.objectData);
  res.contentType('json');
  res.send({ some: JSON.stringify({response:'json'}) });
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});

