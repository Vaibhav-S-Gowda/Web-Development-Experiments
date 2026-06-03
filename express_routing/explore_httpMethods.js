var express = require('express');
var app = express();

app.post('/', function(req, res){
    console.log("Got a post request for the homepage");
    res.send("Post Page");
})

app.delete('/delete', function(req, res) {
    console.log('Got a delete request for the delete page');
    res.send('The page got deleted');
})

app.get('/enrolled', function(req, res){
    console.log('Got a get request from enrolled student page');
    res.send('I am enrolled Student');
})

var server = app.listen(3000, function() {
    var port = server.address().port
    console.log("Server running at http://localhost:%s", port);
});