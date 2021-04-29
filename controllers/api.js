require('dotenv').config();
const nodemailer = require('nodemailer');
const path = require('path');
const atob = require('atob');

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: atob(process.env.MAILER),
        pass: atob(process.env.PASS)
    }
});

module.exports = (app) => {
    // This is for heroku so that React Router works
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });

    app.post('/api/contact', (request, response) => {

        // * just confirm that the account that is sending the mail is valid
        transport.verify((err, success) => {
            if (err) return console.log(err)
            else console.log(`sucesss: ${success}`);
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
            response.sendStatus(500)
        }
    })
}