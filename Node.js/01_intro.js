// The following code is copied from nodejs.org

const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
    res.end(`<html>
            <body>
            <h1>Hallo, ich bin Jayant hier</h1>
            </body>
            </html>`)
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});