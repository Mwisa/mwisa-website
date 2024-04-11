function validateLogin() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    // Simple validation (you should implement more robust validation)
    if (username === '' || password === '') {
        alert('Please enter both username and password.');
    } else {
        // If validation passes, you can send the data to the server for further processing.
        alert('Login successful! Redirecting...');
        // You might want to redirect to another page or perform additional actions here.
    }
}

function validateSignup() {
    var username = document.getElementById('signupUsername').value;
    var password = document.getElementById('signupPassword').value;

    // Simple validation (you should implement more robust validation)
    if (username === '' || password === '') {
        alert('Please enter both username and password.');
    } else {
        // If validation passes, you can send the data to the server for further processing.
        alert('Signup successful! Redirecting...');
        // You might want to redirect to another page or perform additional actions here.
    }
}

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from the 'public' folder

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

- your-project-folder
- public
  - index.html
  - auth.js
- server.js
