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
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({user : 'greek'});
});

app.listen(PORT, function(err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});