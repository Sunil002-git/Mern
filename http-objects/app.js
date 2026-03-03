// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.get('/', (req, res) => {
//     // Log the request URL
//     console.log('Request URL:', req.url);

//     // Log the request method
//     console.log("Request Method: ", req.method);

//     // log the request headers
//     console.log('Request Headers:', req.headers);

//     // Sending a response
//     res.send("Hello World!");

// });

// // starting the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://loca}lhost:${PORT}`)

// });

// Json responses
// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.get('/', (req, res) => {
//     res.json({user : 'greek'});
// });

// app.listen(PORT, function(err) {
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });

// CORE Modules in NODE.JS
// 3.1 fs - file system
// const fs = require('fs');
// fs.writeFileSync('hello.txt', 'This is Node.js');

// // 3.2 path - Path Handling
// const path = require('path');
// const filePath = path.join(__dirname, 'folder', 'file.txt');
// console.log(filePath);

// // http - Creating Servers
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Hello from Server');
// });

// server.listen(5000);

// // url - URL parsing
// const url = require('url');

// const parsed = url.parse('https://example.coom/product?id=100');
// console.log(parsed.query);

// os - Operating System Info
const os = require('os');
console.log(os.platform());
console.log(os.freemem());

// 3.6 events - Event Handling : Let you listen and respond to events.

const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on('start', ()=> {
    console.log('Started!');
});
emitter.emit('start');
// It's Like saying "When i say START, do this."

//3.7 stream - Stream API : Used to handle large files like videos, step-by-step.
const fs = require('fs');
const readStream = fs.createReadStream('hello.txt');

readStream.on('data', chunk => {
    console.log('Reading chunk:', chunk.toString());
});

// Reads file in parts , not all at once.