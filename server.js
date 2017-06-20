var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var MongoClient = require('mongodb').MongoClient;

var app = express();


var comm = [];


var url = 'mongodb://essec:cergyisc00l@138.68.110.210:27017/admin?readPreference=primary';



var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');


app.use(express.static('client'));

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    console.log(err);

    var collection = db.collection("hwcollec");
    app.post('/contact', function (req, res) {
        collection.insert(req.body);
        console.log(req.body);
        res.send("Votre réservation est prise en compte! Merci");
    });

    app.get('/database', function (req, res) {
        collection.find().toArray(function(err,results){
            res.render('database',{gameResult:"", reserv:results});
        });
        
    });  

});

app.get('/accueil', function (req, res) {

    res.render('accueil',{gameResult:""});
})  

app.get('/chambres', function (req, res) {

    res.render('chambres',{gameResult:"You are the champion."});
})  

app.get('/visite', function (req, res) {

    res.render('visite',{gameResult:"You are the champion."});
})   

app.get('/restaurant', function (req, res) {
    
    res.render('restaurant',{gameResult:"You are the champion."});
})  

app.get('/contact', function (req, res) {
    
    res.render('contact',{gameResult:"You are the champion."});

});



app.listen(2929, function () {
  console.log('Example app listening on port 2929!')
})

