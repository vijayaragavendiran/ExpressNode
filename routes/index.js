exports.index = function(request,response){
  response.render('default',{
    title:'Home',
    classname  : 'home',
    users:['Ryan','Jeff','Mark']
  });
};

exports.about = function(request,response){
  response.render('default',{
    title:'About Us',
  classname:'about'
  });
};
