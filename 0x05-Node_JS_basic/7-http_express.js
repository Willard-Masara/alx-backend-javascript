t express = require('express');
const countStudents = require('./3-read_file_async');

// Create an Express application
const app = express();

// Define route handlers
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', (req, res) => {
  const databasePath = './database.csv';
  countStudents(databasePath)
    .then((fields) => {
      let responseBody = 'This is the list of our students\n';
      for (const field in fields) {
        responseBody += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
      res.send(responseBody);
    })
    .catch((error) => {
      console.error('Cannot load the database');
      res.status(500).send('Internal Server Error');
    });
});

// Set the port for the server to listen on
const PORT = 1245;

// Start listening for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app
module.exports = app;

