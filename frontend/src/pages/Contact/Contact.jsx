/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react";
import BiggerButton from "@components/BiggerButton/BiggerButton";
import Title from "@components/Title/Title";
import { motion } from "framer-motion";
import "./Contact.css";
import axios from "axios";
import RedCross from "@components/RedCross/RedCross";

function Contact() {
  const [mailSender, setMailSender] = useState("");
  const [mailSubject, setMailSubject] = useState("");
  const [mailText, setMailText] = useState("");
  const [imgClass, setImgClass] = useState("sendEmail");
  const [sendErrorClass, setSendErrorClass] = useState("");
  const [subjectErrorClass, setSubjectErrorClass] = useState("");
  const [messageErrorClass, setMessageErrorClass] = useState("");
  const [sendEmailError, setSendEmailError] = useState();
  const [mailError, setMailError] = useState();
  const [subjectError, setSubjectError] = useState();
  const [messageError, setMessageError] = useState();
  const [buttonContent, setButtonContent] = useState("SUBMIT");

  const handleSender = (e) => {
    setMailSender(e.target.value);
    if (mailError) {
      setMailError();
      setSendErrorClass("");
    }
  };
  const handleSubject = (e) => {
    setMailSubject(e.target.value);
    if (subjectError) {
      setSubjectError();
      setSubjectErrorClass("");
    }
  };
  const handleText = (e) => {
    setMailText(e.target.value);
    if (messageError) {
      setMessageError();
      setMessageErrorClass("");
    }
  };
  const handleMail = () => {
    axios
      .post("http://localhost:3000/email", {
        mail: mailSender,
        subject: mailSubject,
        message: mailText,
      })
      .then(() => {
        setImgClass("sendEmail sendEmailAnim");
        setButtonContent("SENT");
      })
      .catch((err) => setSendEmailError(err.response.data));
  };
  useEffect(() => {
    setTimeout(() => {
      setImgClass("sendEmail");
      setButtonContent("SUBMIT");
    }, 5500);
  }, [imgClass]);

  useEffect(() => {
    if (sendEmailError) {
      sendEmailError.forEach((error) => {
        const { label } = error.context;
        switch (label) {
          case "mail":
            setMailError(error.message);
            setMailSender("");
            setSendErrorClass("errorBorder");
            break;
          case "subject":
            setSubjectError(error.message);
            setMailSubject("");
            setSubjectErrorClass("errorBorder");
            break;
          case "message":
            setMessageError(error.message);
            setMailText("");
            setMessageErrorClass("errorBorder");
            break;
          default:
            break;
        }
      });
    }
  }, [sendEmailError]);

  return (
    <motion.div
      className="contactPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
    >
      <div className="contactContainer">
        <Title title="CONTACT US" />
        <form action="" className="contactForm">
          <div className={`preInput ${sendErrorClass}`}>
            <input
              type="text"
              placeholder="Enter your e-mail"
              value={mailSender}
              className="contactInput"
              onChange={handleSender}
              required="required"
            />
            {mailError && <RedCross dataerror={mailError} />}
          </div>
          {mailError && <p className="mailError">{mailError}</p>}
          <div className={`preInput ${subjectErrorClass}`}>
            <input
              type="text"
              placeholder="Choose the subject"
              value={mailSubject}
              className="contactInput"
              onChange={handleSubject}
              required="required"
            />
            {subjectError && <RedCross dataerror={subjectError} />}
          </div>
          {subjectError && <p className="subjectError">{subjectError}</p>}
          <div className={`messageText ${messageErrorClass}`}>
            <textarea
              type="text"
              placeholder="Your message ..."
              value={mailText}
              className="contactText"
              onChange={handleText}
              required="required"
            />
            {messageError && <RedCross dataerror={messageError} />}
          </div>
          {messageError && <p className="messageError">{messageError}</p>}
          <BiggerButton
            content={buttonContent}
            src="/Icon/email.png"
            imgClass={imgClass}
            myClass="contactBtn"
            myHandle={handleMail}
          />
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
