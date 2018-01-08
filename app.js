var express = require('express');
var app=express();
var bodyparser=require('body-parser');

//controller = require('./public/controller/controller');

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/public"));

app.use(bodyparser.json());

require('./app/routes')(app);  //For MongoDB


//app.use('views',__dirname + '/views');


app.get('/hello',function(req,res){
	console.log("get request / ");
	res.send('hello there !!!');
});
/*
app.get('/botstoretemp',function(req,res){
	console.log("get /botesotre temp");
	res.sendFile(__dirname+'/public/views/temp.html');
});*/
/*app.get('/home',function(req,res){
	console.log("get /home temp");
	res.sendFile(__dirname+'/public/views/home.html');
})*/

//app.get('/botstore',controller);


app.listen(8080,function(){
	console.log("Server listening to 8080");
});
