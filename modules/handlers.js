var fs = require("fs");
var formidable = require("formidable");


exports.upload = function(request, response) {
    console.log("Starting to work on your upload");
    var form = new formidable.IncomingForm();
    form.parse(request, function (error, fields, files) {
        fs.renameSync(files.upload.path, "test.png");
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Received image: <br>");
        response.write("<img src='/show'/>");
        response.end();
    });
}

exports.welcome = function(request, response) {
    console.log("Starting to work on your welcome");
    fs.readFile("templates/start.html", function(err, html) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
        response.end();
    });
}

exports.css = function(request, response) {
    fs.readFile("templates/style.min.css", function(err, css) {
        response.writeHead(200, {"Content-Type": "text/css; charset=utf-8"});
        response.write(css);
        response.end();
    })
}

exports.show = function(request, response) {
    fs.readFile("test.png", "binary", function(error, file) {
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binary");
        response.end();
    })
}

exports.error = function(request, response) {
    console.log("What am I supposed to do?");
    response.write("404 :(");
    response.end();
}