var http = require('http')
var fs = require('fs')

const PORT = 5001

fs.readFile('./index.html', function(error, html) {
    if (error) throw error;
    http.createServer(function(req, res) {
        res.writeHeader(200, { "Content-Type": "text/html" });
        res.write(html);
        res.end();
    }).listen(PORT)
})

console.log("Static site started on port " + PORT + ".")