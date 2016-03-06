//required all modules ro be defined
var express= require('express');
var app = express();
var routes = require('./routes');

app.set('view engine','ejs') //refers to view folder
app.get('/',routes.index);
app.get('/about',routes.about);
app.get('*',function(request,response){ //redirects to bad routes
  response.send('Bad Route');
})
var server =app.listen(3000,function() //listener port
{
  console.log('Listening to port 3000');
})
