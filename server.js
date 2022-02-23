const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
    const { headers, url, method } = req;
    res.setHeader("content-type", "text/html");
    if (url === '/') {
        fs.readFile('./train/index.html', 'utf-8', (error, data) => {
            if (error) {
                res.statusCode = 500;
                res.write('<h1>Error!</h1>');
                res.end();
            } else {
                res.statusCode = 200;
                res.write(data);
                res.end();
            }
        });
    } else if (url === '/login') {
        fs.readFile('./train/login.html', 'utf-8', (error, data) => {
            if (error) {
                res.statusCode = 500;
                res.write('<h1>Error!</h1>');
                res.end();
            } else {
                res.statusCode = 200;
                res.write(data);
                res.end();
            }
        });
    } else if (url === '/logincheck' && method === "POST") {
        const body = [];
        req.on("data", chunk => {
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const pass = parsedBody.split('=')[2];
            // res.write("huleej awlaa")
            // res.end();
            if (pass === "muumaa1") {
                res.statusCode = 302;
                res.setHeader("Location", "/home");
                res.end();
            } else {
                res.statusCode = 302;
                res.setHeader("Location", "/error");
                res.end();
            }
        });
    } else if (url === '/home') {
        fs.readFile('./train/home.html', 'utf-8', (error, data) => {
            res.statusCode = 200;
            res.write(data);
            res.end();

        });
    } else if (url === '/error') {
        fs.readFile('./train/error.html', 'utf-8', (error, data) => {
            res.statusCode = 200;
            res.write(data);
            res.end();

        });
    } else {
        res.statusCode = 404;
        res.write(`<h1>404</h1>`);
        res.end();
    }
});
server.listen(8080, () => {
    console.log('done');
})