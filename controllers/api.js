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
    app.get('*', (request, response) => {
        response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });

    app.get('/api/resume', (request, response) => {
        response.setHeader('Content-disposition', 'attachment; filename=Resume.pdf');
        response.sendFile(path.resolve(__dirname, '../server/assets', 'Resume.pdf'))
    })

    app.post('/api/contact', (request, response) => {

        // * just confirm that the account that is sending the mail is valid
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
            })
        } catch {
            response.sendStatus(500)
        }
    })
}