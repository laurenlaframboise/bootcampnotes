var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.get("/", function(req, res){
    res.send("welcome to the home page");
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("the server is connected!");
});



