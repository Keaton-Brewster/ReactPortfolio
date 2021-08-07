require("dotenv").config();

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const atob = require("atob");

const PORT = process.env.PORT || 3001;
const app = express();

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: atob("dGhyb3dhd2F5a2VhdG9uZGV2QGdtYWlsLmNvbQ"),
    pass: atob("S2VhdG9uRGV2"),
  },
});

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.post("/api/contact", (request, response) => {
  // just confirm that the account that is sending the mail is valid
  transport.verify((err, success) => {
    if (err) throw new Error(err);
  });

  try {
    request.body.from = atob(request.body.from);
    transport.sendMail(request.body, (err, res) => {
      if (err) {
        response.sendStatus(400);
      } else {
        response.sendStatus(200);
      }
    });
  } catch {
    response.sendStatus(500);
  }
});

app.listen(PORT);

exports.express = functions.https.onRequest(app);
