var express=require('express');

var todoController=require('./controller/todoController');

var app= express();

app.set('view engine','ejs');

app.use(express.static('./public'));

todoController(app);

app.listen(3000);

console.log('You are listening at port 3000')
