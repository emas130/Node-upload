var http = require("http");
var colors = require("colors");

var handlers = require("./handlers");

function start() {
    function onRequest(request, response) {
        console.log("Your demand is taken into consideration".green);

        console.log("Your demand " + request.url + " is being taken care of");

        response.writeHead("200", {"Content-Type": "text/plain; charset=utf-8"});

        switch(request.url) {
            case "/":
            case "/start":
                handlers.welcome(request, response);
                break;
            case "/css":
                handlers.css(request, response);
                break;
            case "/upload":
                handlers.upload(request, response);
                break;
            case "/show":
                handlers.show(request, response);
                break;
            default:
                handlers.error(request, response);
                break;
        }
    }
    http.createServer(onRequest).listen(9000);

    console.log("Server is now up!".green);
}

exports.start = start;