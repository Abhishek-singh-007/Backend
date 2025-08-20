const express = require("express");
const { connect } = require("./connect");
const urlRoute = require("./routes/url");
const app = express();
const port = 3000;

connect("mongodb://localhost:27017/shorturl").then(() =>
  console.log("MongoDB connected")
);

app.use(express.json());
app.use("/url", urlRoute);

app.listen(port, () => {
  console.log("Server is start");
});
