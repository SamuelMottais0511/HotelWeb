var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('client'));

app.get('/chambres', function (req, res) {

    res.render('chambres',{gameResult:"You are the champion."});
})

app.get('/hotelparis', function (req, res) {

    res.render('accueil',{gameResult:"You are the champion."});
})    

app.get('/visite', function (req, res) {

    res.render('visite',{gameResult:"You are the champion."});
})   

app.get('/restaurant', function (req, res) {
    
    res.render('restaurant',{gameResult:"You are the champion."});
})  

app.listen(2929, function () {
  console.log('Example app listening on port 2929!')
})

