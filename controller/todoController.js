var bodyParser= require('body-parser');
var mongoose=require('mongoose');
mongoose.connect('mongodb://test:test@ds127173.mlab.com:27173/todo_app');

var todoSchema=new mongoose.Schema({
	item:String
});

var Todo=mongoose.model('Todo',todoSchema);



var urlencodeParser=bodyParser.urlencoded({extended:false});

module.exports = function(app){

app.get('/',function(req,res){
Todo.find({},function(err, data){
	if (err) throw err;
res.render('todo',{todos:data});	
});
});
app.post('/todo',urlencodeParser,function(req, res){

	var newTodo= Todo(req.body).save(function(err, data){
		if (err) throw err;
		res.json(data);
});
});
app.delete('/todo/:item', function(req,res){

Todo.find({item:req.params.item.replace(/\-/g, ' ')}).remove(function(err, data){
if (err) throw err;
res.json(data);
});

});



};