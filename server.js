// import http from 'http';
// import fs from 'fs';
// import path from 'path';
// import urlMa from "url";

// const server = http.createServer((req, res) => {
//     const { headers, url, method } = req;
//     res.setHeader("content-type", "text/html");
//     if (url === '/') {
//         fs.readFile('./train/index.html', 'utf-8', (error, data) => {
//             if (error) {
//                 res.statusCode = 500;
//                 res.write('<h1>Error!</h1>');
//                 res.end();
//             } else {
//                 res.statusCode = 200;
//                 res.write(data);
//                 res.end();
//             }
//         });
//     } else if (url === '/login') {
//         fs.readFile('./train/login.html', 'utf-8', (error, data) => {
//             if (error) {
//                 res.statusCode = 500;
//                 res.write('<h1>Error!</h1>');
//                 res.end();
//             } else {
//                 res.statusCode = 200;
//                 res.write(data);
//                 res.end();
//             }
//         });
//     } else if (url === '/logincheck' && method === "POST") {
//         const body = [];
//         req.on("data", chunk => {
//             body.push(chunk);
//         });
//         req.on("end", () => {
//             const parsedBody = Buffer.concat(body).toString();
//             const pass = parsedBody.split('=')[2];
//             // res.write("huleej awlaa")
//             // res.end();
//             if (pass === "muumaa1") {
//                 res.statusCode = 302;
//                 res.setHeader("Location", "/home");
//                 res.end();
//             } else {
//                 res.statusCode = 302;
//                 res.setHeader("Location", "/error");
//                 res.end();
//             }
//         });
//     } else if (url === '/home') {
//         fs.readFile('./train/home.html', 'utf-8', (error, data) => {
//             res.statusCode = 200;
//             res.write(data);
//             res.end();

//         });
//     } else if (url === '/error') {
//         fs.readFile('./train/error.html', 'utf-8', (error, data) => {
//             res.statusCode = 200;
//             res.write(data);
//             res.end();

//         });
//     } else if (url.endsWith('.jpg') || url.endsWith('.png')) {
//         const parsed = urlMa.parse(url);
//         const fileName = path.basename(parsed.pathname);
//         console.log("gsdf" + fileName);
//         fs.readFile('./train/img/' + fileName, (error, data) => {
//             res.statusCode = 200;
//             res.setHeader("content-type", "image/jpg")
//             res.write(data);
//             res.end();
//         });
//     } else if (url.endsWith('.pdf')) {
//         const parsed = urlMa.parse(url);
//         const fileName = path.basename(parsed.pathname);
//         console.log("gsdf" + fileName);
//         fs.readFile('./train/pdf/' + fileName, (error, data) => {
//             res.statusCode = 200;
//             res.setHeader("content-type", "application/pdf")
//             res.write(data);
//             res.end();
//         });
//     } else if (url.endsWith('.css')) {
//         const parsed = urlMa.parse(url);
//         const fileName = path.basename(parsed.pathname);
//         console.log("gsdf" + fileName);
//         fs.readFile('./train/index/' + fileName, (error, data) => {
//             res.statusCode = 200;
//             res.setHeader("content-type", "text/css")
//             res.write(data);
//             res.end();
//         });
//     } else if (url.endsWith('.js')) {
//         const parsed = urlMa.parse(url);
//         const fileName = path.basename(parsed.pathname);
//         console.log("gsdf" + fileName);
//         fs.readFile('./train/js/' + fileName, (error, data) => {
//             res.statusCode = 200;
//             res.setHeader("content-type", "text/js")
//             res.write(data);
//             res.end();
//         });
//     } else {
//         res.statusCode = 404;
//         res.write(`<h1>404</h1>`);
//         console.log('=====', url);
//         res.end();
//     }
// });
// server.listen(8080, () => {
//     console.log('done');
// })