var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.set('view engine', 'ejs');

app.get("/", function(req, res){
	res.render('index', {title: "TITLE"});
})

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	})
})

http.listen(3000, function(){
	console.log("listening on port 3000")
})