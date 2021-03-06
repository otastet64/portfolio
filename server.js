var express  = require('express');

var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');


//Afficher la page d'accueil en français
app.get('/', function (req, res) {
    res.render('index');
});

//Afficher la page d'accueil en anglais
app.get('/english', function (req, res) {
    res.render('english');
});


var port= (process.env.PORT || 80);
app.listen(port, function () {
  console.log('Server listening on port 80');
});
