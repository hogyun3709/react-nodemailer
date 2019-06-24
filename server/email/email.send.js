const nodemailer = require('nodemailer')

/* Checkout nodemailer usage = nodemailer.com */
/* Get credentials */

const credentials = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
}

/* Create transporter object */

const transporter = nodemailer.createTransport(credentials)

module.exports = async (to, content) => {
  const contacts = {
    from: process.env.MAIL_USER,
    to: to.props.email
  }
  /* Wrap data in single obj -> nodemailer*/
  const email = Object.assign({}, content, contacts)
  await transporter.sendMail(email)
}
