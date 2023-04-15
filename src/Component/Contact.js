import { MdOutlineMailOutline } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { RiWhatsappLine } from "react-icons/ri";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_4j3vibq",
      "template_z5pzs59",
      form.current,
      "vVx8tzG_RuXXbfK5O"
    );
    e.target.reset();
  };
  return (
    <section id="Contact">
      <h5 className="text-white text-2xl text-center ">Get In Touch</h5>
      <h2 className="text-sky-500 text-4xl text-center  mb-4">Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options ">
          <article className="contact_option">
            <MdOutlineMailOutline className="contact_option-icon" />

            <h4>Email</h4>
            <h5>nehamandrai80@gmail.com</h5>

            <a href="mailto:nehamandrai80@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <TbMessageCircle className="contact_option-icon" />

            <h4>Linkedin</h4>
            <h5>nehamandrai</h5>

            <a href="https://www.linkedin.com/messaging/thread/2-MmIzNmVkMWUtYmVjYy00ZTI5LTlmZWYtY2IzNzI5NTg5MmYxXzAxMw==/">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiWhatsappLine className="contact_option-icon" />

            <h4>Whatspp</h4>
            <h5>+9926494717</h5>

            <a
              href="https://api.whatsapp.com/send?=+9926494717"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="name"
            required
          />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="sumbit"
            className="border-2 border-sky-500 rounded-md py-2 mx-20  sm:mx-0 hover:bg-white   bg-sky-500 text-sky-900 text-black"
            value="send"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
