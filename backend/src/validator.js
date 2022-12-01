const Joi = require("joi");

const mailSchema = Joi.object({
  mail: Joi.string().email({ tlds: false }).required(),
  subject: Joi.string().max(100).required(),
  message: Joi.string().max(255).required(),
});

const validateMail = (req, res, next) => {
  const { mail, subject, message } = req.body;

  const { error } = mailSchema.validate(
    { mail, subject, message },
    { abortEarly: false }
  );
  if (error) {
    res.status(422).json(error.details);
  } else {
    next();
  }
};

module.exports = {
  validateMail,
};
