// include http module
var http = require('http');

// declare port
var PORT1 = 7000;

var PORT2 = 7500;

var list = ["hello world", "howdy cowboy", "when you hear the blues"]


function handleRequests(request, response) {
  var index = Math.floor(Math.random() * ((list.length) - 0) + 0);
  console.log(index)
  response.end('It Works!' + list[index] + request.url);
}
// function to handle
function handleRequests2(request, response) {
    response.end('It Works! Sorry But You Suck ' + request.url);
}

// instantiate our server
var server1 = http.createServer(handleRequests);
var server2 = http.createServer(handleRequests2);

// Listen on port 8080 and console log message
server1.listen(PORT1, function() {
    console.log("SERVER LISTENING ON: http://localhost:%s", PORT1);
});

server2.listen(PORT2, function() {
    console.log("SERVER LISTENING ON: http://localhost:%s", PORT2);
});

// Create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// ** Bonus **
// * Generate the good / bad phrase randomly from a list of predefined phrases
// * Use the `twitter` package inside the response to also return a random tweet!
