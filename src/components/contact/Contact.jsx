import React from "react";
import { useState, useRef } from "react";

import Swal from "sweetalert2";

import emailjs from "@emailjs/browser";

import "./contact.css";

function Contact() {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const form = useRef();

  const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_z2pewcl",
        "template_a32gtx8",
        form.current,
        "2mpq9oCQHTINZh17-"
      )
      .then(
        (res) => {
          console.log(res.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    Toast.fire({
      icon: "success",
      title: "Thanks for your message, I will respond as soon as possible!",
      background: "#F5F6F7",
      color: "black",
    });
    setUsername("");
    setUserEmail("");
    setUserMessage("");
  };
  return (
    <div className="contact-container">
      <h2 className="contact-header">Let's Get In Touch</h2>
      <p className="contact-text">
        Want to talk about a project or job? Reach out and I'll get back to you.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <label className="contact-labels">Name</label>
        <input
          className="contact-inputs"
          placeholder="What's Your Name?"
          type="text"
          name="user_name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label className="contact-labels">Email</label>
        <input
          className="contact-inputs"
          placeholder="What's Your Email?"
          type="email"
          name="user_email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <label className="contact-labels">Message</label>
        <textarea
          className="contact-inputs"
          placeholder="How Can I Help You?"
          name="message"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          rows={4}
          cols={4}
          required
        />
        <button className="contact-button" type="submit">
          Send
        </button>
      </form>
      <div className="social-container">
        <a
          href="https://www.linkedin.com/in/rafael-v-rios/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./linkedin.png"
            alt="A link to my Linkedin Profile"
            className="social-icons"
          />
        </a>
        <a
          href="https://github.com/rvrios22?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./github.png"
            alt="A link to my github repositories"
            className="social-icons"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
