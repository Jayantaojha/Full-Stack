const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('./Node.js/05_file_serving/index.html');
const about = fs.readFileSync('./Node.js/05_file_serving/about.html');
const services = fs.readFileSync('./Node.js/05_file_serving/services.html');
const contact = fs.readFileSync('./Node.js/05_file_serving/contact.html');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if(res.url == '/'){
        res.end(home);
    }
    else if(res.url == '/about'){
        res.end(about);
    }
    else if(res.url == '/services'){
        res.end(services);
    }
    else if(res.url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end('<h1>404 Not Found </h1>');
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });