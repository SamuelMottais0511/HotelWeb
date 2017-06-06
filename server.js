var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('client'));

app.get('/', function (req, res) {
    var serverPick = "Cool",
        playerPick = req.params.playerChoice;
    // res.send(confrontation(serverPick,playerPick));
    res.render('game',{gameResult:"You are the champion."});
})

app.get('/samuel', function (req, res) {
    var serverPick = "Cool",
        playerPick = req.params.playerChoice;
    // res.send(confrontation(serverPick,playerPick));
    res.render('chambres',{gameResult:"You are the champion."});
})    

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

