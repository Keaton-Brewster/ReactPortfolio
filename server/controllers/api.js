const nodemailer = require('nodemailer');
require('dotenv').config();
const Mailer = require('../config/keaton');
const atob = require('atob');

Mailer._goLive();

const transport = nodemailer.createTransport(Mailer._configureMailer());

module.exports = (app) => {
    app.post('/api/contact', (request, response) => {
        // * just confirm that the account that is sending the mail is valid
        transport.verify((err, success) => {
            if (err) return console.log(err)
            else console.log(success);
        });


        try {
            request.body.from = atob(request.body.from);
            transport.sendMail(request.body, (err, res) => {
                if (err) {
                    response.sendStatus(400);
                } else {
                    response.sendStatus(200);
                }
            })
        } catch {
            res.sendStatus(500)
        }
    })
}