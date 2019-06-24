const { CLIENT_ORIGIN } = require("../config");

module.exports = {
  confirm: id => ({
    subject: "Confirmation email from your project",
    html: `
      <a href='${CLIENT_ORIGIN}/confirm/${id}'x>
        click to confirm email
      </a>
    `,
    text: `Copy and paste this link: ${CLIENT_ORIGIN}/confirm/${id}`
  })
};
