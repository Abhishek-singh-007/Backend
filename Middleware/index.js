const express = require("express");
const app = express();

const PORT = 3000;
// it always in order
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const logging = function (req, res, next) {
  console.log("Loging");
  next;
};

const auth = function (req, res, next) {
  console.log("auth");
};

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("Server is stert");
});
