var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var friends = ["tony", "Miranda", "Justin", "Pierre", "Lilly"];

app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res){
    console.log(req.body.newfriend);
    // res.send("you have reached the post route");
        var newFriend = req.body.newfriend;
        friends.push(newFriend);
        res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});