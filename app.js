var express= require('express');
var app = express();
var routes = require('./routes');
app.set('view engine','ejs')
app.get('/',routes.index);
app.get('/about',routes.about);
app.get('*',function(request,response){
  response.send('Bad Route');
})
var server =app.listen(3000,function()
{
  console.log('Listening to port 3000');
})
