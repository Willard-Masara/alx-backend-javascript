t fs = require('fs');
const csv = require('csv-parser');

/**
 * Function to count the number of students in each field.
 * @param {string} path - The path to the database CSV file.
 */
function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Parse the CSV data
    const students = [];
    const fields = {};
    const rows = data.trim().split('\n');

    // Iterate over each row
    rows.forEach((row) => {
      const [firstName, lastName, age, field] = row.split(',');
      if (firstName && lastName && age && field) {
        students.push(firstName);
        if (fields[field]) {
          fields[field].push(firstName);
        } else {
          fields[field] = [firstName];
        }
      }
    });

    // Log the total number of students
    console.log(`Number of students: ${students.length}`);

    // Log the number of students in each field
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    // Handle errors
    console.error('Cannot load the database');
    throw error;
  }
}

// Export the function
module.exports = countStudents;

