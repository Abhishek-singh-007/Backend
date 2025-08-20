// Building first rest api
const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// routes
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  // so id may be anything so fist get id
  const id = Number(req.params.id);
  // now find the id in list
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.listen(PORT, () => console.log("server is started"));
