var express = require('express');
const hbs = require('hbs')
const path = require('path')
var app = express();
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))
//public folder
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index.hbs');
});

app.get('/cart', function(req, res) {
  res.render('cart.hbs');
});

//404 page
app.get('*', function(req, res) {
  res.render('404.hbs');
});

app.listen(8080);
console.log('Server is listening on port 8080');