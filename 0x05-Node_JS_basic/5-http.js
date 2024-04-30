t http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Parse the URL
  const url = new URL(req.url, `http://${req.headers.host}`);

  // Handle different URL paths
  if (url.pathname === '/') {
    // For the root path, display "Hello Holberton School!"
    res.end('Hello Holberton School!\n');
  } else if (url.pathname === '/students') {
    // For the /students path, display the list of students from the database
    const databasePath = './database.csv';
    countStudents(databasePath)
      .then((fields) => {
        // Format the response body
        let responseBody = 'This is the list of our students\n';
        for (const field in fields) {
          responseBody += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
        // Send the response
        res.end(responseBody);
      })
      .catch((error) => {
        // Handle errors
        console.error('Cannot load the database');
        res.statusCode = 500;
        res.end('Internal Server Error');
      });
  } else {
    // For any other path, return a 404 Not Found response
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

// Set the port for the server to listen on
const PORT = 1245;

// Start listening for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app
module.exports = app;

