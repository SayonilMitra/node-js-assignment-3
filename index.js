const fs = require('fs')
const http = require('http')
let port = 5000

let content = '<h1> Hello World </h1><br/><p> This is {Your Name}... </p>'
let filename = 'index.html'
fs.writeFile(filename, content, (err) => {
    if (err) throw err
})

let server = http.createServer((req, res) => {

    fs.readFile(filename, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    })
})

server.listen(port)