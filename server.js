//  mongod --port 27017 --dbpath=./data --smallfiles

var express = require('express')
var mongo = require('mongodb').MongoClient;
var app = express()
var db;
var databaseUrl = 'mongodb://localhost:27017/image-search';
//var databaseUrl = 'mongodb://moleyo:freecodecamp@ds139879.mlab.com:39879/shortener';
//var databaseUrl = process.env.MONGOLAB_URI;

mongo.connect(databaseUrl, function(err, database) {
  if(err) throw err;
  db = database;
  // Start the application after the database connection is ready
  app.listen(process.env.PORT || 8080, function () {
    console.log('Example app listening on port 8080!')
  })  
});

app.get('/', function (req, res) {
  //homepage
  res.send('example of url to give: https://api-projects-moleyo1.c9users.io/new/http://fishsticks.com');
})