const express = require('express');
const app = express();
const fileServerMiddleware = express.static('public'); // Create the file server middleware

// Use the file server middleware
app.use(fileServerMiddleware);

app.listen(3000, () => {
	console.log('Server has started');
});