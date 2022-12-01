const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "eatsimplywild@outlook.com",
    pass: "eatsimply2022",
  },
});

const postEmail = (req, res, next) => {
  const { mail, subject, message } = req.body;
  const options = {
    from: "eatsimplywild@outlook.com",
    to: "eatsimplywild@outlook.com",
    subject: `${subject} FROM ${mail}`,
    text: message,
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error sending mail");
    } else {
      res.location(`/email/${info.messageId}`).sendStatus(201);
      next();
    }
  });
};

module.exports = {
  postEmail,
};
