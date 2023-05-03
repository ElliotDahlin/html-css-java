//Hämta in http paket
const http = require("http");
const url = require("url");

//Starta up en local server
http.createServer(function (request, response) {
    //Inkludera HTTP Code och innehåll
    response.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    //Skriv ett meddelande tillbaka till user
    response.write("Hello World ");
    //response.write(request.url);
    let qData = url.parse(request.url, true).query;
    let responeString = `Idag är det den ${qData.day} ${qData.month}. fin dag`;
    response.end(responeString); //Detta är slutet av responsen
}).listen(8080);