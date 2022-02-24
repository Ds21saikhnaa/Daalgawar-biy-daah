const http = require('http');
const { format } = require('path');

const server = http.createServer((req, res) => {
    const { headers, url, method } = req;
    res.setHeader("content-type", "text/html");
    if (url === '/') {
        res.statusCode = 200;
        res.write("<h1>Welcome to my first back-end project</h1>")
        res.write(`<br><br> Login hiih <a href="/login">dar</a>`);
        res.end();
    } else if (url === '/login') {
        res.statusCode = 404;
        res.write("<h1>login hiih</h1>")
        res.write(`<form action="/logincheck" method="POST">`);
        res.write(`<br><input type="text" name="email"/>`);
        res.write(`<br><input type="password" name="password"/>`);
        res.write(`<br><input type="submit" value="login"/>`);
        res.write(`<form/>`);
        res.end();
    } else if (url === '/logincheck' && method === "POST") {
           
        res.write(`<h1>aldaa hiiw</h1>`);
        res.write("<h1>" + method + "</h1>");
        res.end();
    } else if (url === '/home') {
        //login daraa
    } else {
        res.statusCode = 404 ;
        res.write(`<h1>404</h1>`);
        res.write("<h1>" + method + "</h1>");
        res.end();
    }
});
server.listen(8080, () => {
    console.log('done');
})