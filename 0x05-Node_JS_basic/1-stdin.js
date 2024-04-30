t readline = require('readline');

// Create interface for reading input from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display initial message
console.log("Welcome to Holberton School, what is your name?");

// Listen for input from user
rl.on('line', (input) => {
  // Display user's name
  console.log(`Your name is: ${input}`);
});

// Listen for close event
rl.on('close', () => {
  // Display closing message
  console.log("This important software is now closing");
});

