const nodemailer = require('nodemailer');
require('dotenv').config();
const atob = require('atob');

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: atob(process.env.USER),
        pass: atob(process.env.PASS)
    }
});

module.exports = (app) => {
    app.post('/api/contact', (request, response) => {
        console.log(request.body)

        // * just confirm that the account that is sending the mail is valid
        transport.verify((err, success) => {
            if (err) return console.log(err)
            else console.log(`sucesss: ${success}`);
        });


        try {
            request.body.from = atob(request.body.from);
            transport.sendMail(request.body, (err, response) => {
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