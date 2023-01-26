const nodemailer = require('nodemailer');

class SendMail {
  constructor() {
    // Create a transporter object
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  sendTo(email, mailOptions) {
    mailOptions.from = process.env.EMAIL_USER;
    mailOptions.to = email;

    this.transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}

const expenseTemplate = {
  subject: 'Expense Email',
  text: 'Hello, this is a test email sent using Node.js',
};

const incomeTemplate = {
  subject: 'Income Email',
  text: 'Hello, this is a test email sent using Node.js',
};

module.exports = new SendMail();
module.exports.templates = {
  expenseTemplate,
  incomeTemplate,
};
