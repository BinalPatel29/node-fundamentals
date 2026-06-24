import http from 'http';
import 'dotenv/config';
const PORT = process.env.PORT || 3000;

/*
const server = http.createServer((req, res) => {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.end('Hello from Node.js!');
   });
server.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});
*/

const server = http.createServer((req,res) => {
    if(req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {"content-type": 'text/plain'});
        res.end("Home page");
    } else if (req.method === 'GET' && req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('About page');
    } else if(req.method === 'GET' && req.url === '/api/notes'){
        const notes = [
            {id: 1, text: 'Buy milk'},
            {id: 2, text: 'call dentist'}
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(notes));
    } else {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end('404- Page not found');
    }
});
server.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});