t fs = require('fs');
const csv = require('csv-parser');

/**
 * Function to count the number of students in each field asynchronously.
 * @param {string} path - The path to the database CSV file.
 * @returns {Promise} A promise that resolves with the count of students in each field.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the database file asynchronously
    fs.createReadStream(path)
      .pipe(csv())
      .on('data', (row) => {
        // Process each row
        // Assuming the CSV file has 'firstname', 'lastname', 'age', and 'field' columns
        // Ignore empty lines
        if (row.firstname && row.lastname && row.age && row.field) {
          students.push(row.firstname);
          if (fields[row.field]) {
            fields[row.field].push(row.firstname);
          } else {
            fields[row.field] = [row.firstname];
          }
        }
      })
      .on('end', () => {
        // Log the total number of students
        console.log(`Number of students: ${students.length}`);

        // Log the number of students in each field
        for (const field in fields) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }

        // Resolve with the count of students in each field
        resolve(fields);
      })
      .on('error', (error) => {
        // Handle errors
        console.error('Cannot load the database');
        reject(error);
      });
  });
}

// Export the function
module.exports = countStudents;

