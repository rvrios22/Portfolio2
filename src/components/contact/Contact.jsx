import React from "react";

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
        import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
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
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label className="contact-labels">Name</label>
        <input
          className="contact-inputs"
          placeholder="Type Your Name..."
          type="text"
          name="user_name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label className="contact-labels">Email</label>
        <input
          className="contact-inputs"
          placeholder="Type Your Email..."
          type="email"
          name="user_email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <label className="contact-labels">Message</label>
        <textarea
          className="contact-inputs"
          placeholder="How can I help you?"
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
    </div>
  );
}

export default Contact;
