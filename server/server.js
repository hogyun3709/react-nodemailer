require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const emailController = require("./email/email.controller");
/* Seems better to store every config keys in .env */
const { PORT, CLIENT_ORIGIN } = require("./config");
/* Configure CORS - only allow requests from client*/
app.user(
  cors({
    origin: CLIENT_ORIGIN
  })
);
/* Allow the app to accept JSON on req.body*/
app.use(express.json());

/* /wake-up endpoint prevent the hosting services let the app sleep*/

app.get("/wake-up", (req, res) => res.json("Hello backend"));

/* hitted from the onSubmit handler in Landing.js*/

app.post("email", emailController.collectEmail);

/* Manage state in confirm based on request / check invoked callback request */

app.get("/email/confirm/:id", emailController.confirmEmail);

/* Check all other req*/

app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not found" });
});

/* Handling mongoose deprecation warning in console */

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}

/* Connect mongo db with starting the server */

mongoose.connect(DB_URL, options, () => {
  app.listen(PORT, () => console.log('Server is running successfully'))
})
