var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');


var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('client'));

app.get('/chambres', function (req, res) {

    res.render('chambres',{gameResult:"You are the champion."});
})

app.get('/accueil', function (req, res) {

    res.render('accueil',{gameResult:"You are the champion."});
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

app.post('/contact', function (req, res) {
    console.log(req.body);
    res.send("Merci");
});

app.listen(2929, function () {
  console.log('Example app listening on port 2929!')
})

