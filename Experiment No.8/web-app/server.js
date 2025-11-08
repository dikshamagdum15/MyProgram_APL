// server.js
import express from "express";

const app = express();
const PORT = 3000;

// When user visits the home page
app.get("/", (req, res) => {
  res.send("Hello World! This is my first web-based Node.js app 😊");
});

// Start the web server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
