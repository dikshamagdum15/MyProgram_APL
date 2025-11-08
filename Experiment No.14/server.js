import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Home (GET)
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Express.js Demo</title>
        <style>
          body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #74ebd5, #ACB6E5);
            color: #333;
            text-align: center;
            margin-top: 80px;
          }
          h1 {
            color: #222;
            font-size: 36px;
            margin-bottom: 10px;
          }
          p {
            font-size: 18px;
            margin-top: 5px;
          }
          form {
            margin-top: 40px;
            background: #fff;
            padding: 25px;
            border-radius: 15px;
            display: inline-block;
            box-shadow: 0px 4px 20px rgba(0,0,0,0.2);
          }
          input {
            padding: 10px;
            margin: 10px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 16px;
          }
          button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
          }
          button:hover {
            background-color: #45a049;
          }
        </style>
      </head>
      <body>
        <h1>🚀 Express.js GET & POST Demo</h1>
        <p>Use this simple form to test GET and POST requests!</p>
        
        <form action="/greet" method="get">
          <h3>GET Request</h3>
          <input type="text" name="name" placeholder="Enter your name" required />
          <button type="submit">Send GET</button>
        </form>

        <form action="/submit" method="post">
          <h3>POST Request</h3>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <button type="submit">Send POST</button>
        </form>
      </body>
    </html>
  `);
});

// GET handler
app.get("/greet", (req, res) => {
  const name = req.query.name || "Guest";
  res.send(`<h1>Hello, ${name}! 👋</h1><p>This is a GET response from Express.js!</p>`);
});

// POST handler
app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res.send(`
    <h1>✅ POST Request Received!</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
  `);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
