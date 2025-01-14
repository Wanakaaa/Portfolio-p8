require('dotenv').config();
const nodemailer = require('nodemailer')

console.log('GMAIL_EMAIL_ADDRESS:', process.env.GMAIL_EMAIL_ADDRESS);
console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_EMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD,
    }
})

transporter.verify(function (error, success) {
    if (error) {
        console.log('erreur lors de la config:', error)
    } else {
        console.log('Nodemail est prêt')
    }
})

const sendMail = (to, subject, text) => {
    const mailOptions = {
        from: process.env.RECEIVER_EMAIL,
        to,
        subject,
        text,
    }

    return transporter.sendMail(mailOptions)
}

module.exports = sendMail;