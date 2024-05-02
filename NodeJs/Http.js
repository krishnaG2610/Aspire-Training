var http= require('http');
http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write(`<h1>Hi Aspire...</h1>`);
    response.write(`<h2>hello Employees...</h2>`);
    response.end();
}).listen(9000);