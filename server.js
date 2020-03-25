var express = require('express')
app = express();
var path = require('path');
var BodyParser = require('body-parser');

app.use(BodyParser.json());

app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
	console.log(req.body);
	res.send(req.body);
})

app.listen(8080, function(){
	console.log("hello gabby");
});