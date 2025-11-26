const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/status') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      status: 'ok',
      service: 'devops-assignment',
      timestamp: new Date().toISOString()
    }));
  }
});

server.listen(3000);