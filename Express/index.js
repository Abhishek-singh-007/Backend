// How to use express for better and optimese way of coding api
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from home page");
});

app.get("/about", (req, res) => {
  res.send("Hello from about page");
});
app.get("/abouts", (req, res) => {
  res.send(`Hello ${req.query.name}`);
});

app.listen(8000, () => console.log("server started by express"));

// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("Server started"));
