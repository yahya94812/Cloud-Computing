const http = require('http');
const url = require('url');

const PORT = 8080;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    
    // Only handle GET requests to /calc
    if (req.method !== 'GET' || parsedUrl.pathname !== '/calc') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
        return;
    }
    
    const params = parsedUrl.query;
    
    try {
        const a = parseFloat(params.a);
        const b = parseFloat(params.b);
        const op = params.op;
        
        // Check for missing or invalid parameters
        if (isNaN(a) || isNaN(b) || !op) {
            throw new Error('Missing parameters');
        }
        
        let result;
        
        switch (op) {
            case 'add':
                result = a + b;
                break;
            case 'sub':
                result = a - b;
                break;
            case 'mul':
                result = a * b;
                break;
            case 'div':
                if (b === 0) {
                    throw new Error('Division by zero');
                }
                result = a / b;
                break;
            default:
                throw new Error('Invalid operation. Use add, sub, mul, or div.');
        }
        
        const response = JSON.stringify({ result });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(response);
        
    } catch (error) {
        const errorResponse = JSON.stringify({ error: error.message });
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(errorResponse);
    }
});

server.listen(PORT, HOST, () => {
    console.log(`Server running http://${HOST}:${PORT}`);
});
