const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "eatsimplysup@outlook.com",
    pass: "eatsimply2022",
  },
});

const postEmailBack = (req, res) => {
  const { mail } = req.body;
  const options = {
    from: "eatsimplysup@outlook.com",
    to: mail,
    subject: "Thank you for your email !",
    text: "Thank you for your email ! We will respond to you in few days.  EAT'S SIMPLY'S TEAM",
  };
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error sending mail back");
    } else {
      res.location(`/email/${info.messageId}`).sendStatus(201);
    }
  });
};

module.exports = {
  postEmailBack,
};
