const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const webpush = require("web-push");
const path = require("path");
const PushNotifications = require("node-pushnotifications");

const app = express();
// set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// server
app.listen(process.env.PORT, () => {
  console.log(`server running at http://localhost:${process.env.PORT}/`);
});
