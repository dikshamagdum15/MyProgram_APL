// Import express
const express = require('express'); 
const app = express();

// Set EJS as the template engine 
app.set('view engine', 'ejs');

// Middleware to serve static files (optional) 
app.use(express.static('public'));

// Route for Home Page 
app.get('/', (req, res) => { 
const data = {
    title: 'Home Page',
    message: 'Welcome to Express.js Template Example!', 
    name: 'Diksha'
};
res.render('index', data); // render the index.ejs template
});


// Route for About Page 
app.get('/about', (req, res) => { 
const data = {
    title: 'About Us',
    description: 'This page is rendered using the EJS template engine in Express.'
};
res.render('about', data);
 
});


// Start the server 
app.listen(3000, () => {
console.log('Server running at http://localhost:3000');
});
