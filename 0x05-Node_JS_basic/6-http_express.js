t express = require('express');

// Create an Express application
const app = express();

// Define route handlers
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Set the port for the server to listen on
const PORT = 1245;

// Start listening for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app
module.exports = app;

