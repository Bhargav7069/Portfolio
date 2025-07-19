import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateMobile = (mobile) => {
    return mobile === '' || /^[0-9]{10}$/.test(mobile);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const email = formData.get('email');
    const mobile = formData.get('mobile');

    if (!validateEmail(email)) {
      toast.error('Invalid email address');
      return;
    }

    if (!validateMobile(mobile)) {
      toast.error('Mobile number must be 10 digits');
      return;
    }

    setLoading(true);
    emailjs
      .sendForm('service_6t6alpf', 'template_cyw78vr', form.current, 'cOO0nFVmI_uNsCdyE')
      .then(() => {
        toast.success(`Thanks for contacting me! I'll get back to you soon.`);
        e.target.reset();
      })
      .catch((error) => {
        console.error('Email error:', error);
        toast.error('Failed to send message. Try again.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact section" id="contact">
      {/* Stars & Blobs */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="contact__blob contact__blob--1"></div>
      <div className="contact__blob contact__blob--2"></div>

      <div className="section__header">
        <h2 className="section__title">Contact Me</h2>
      </div>

      <div className="contact__container container">
        <div className="contact__panel">
          {/* Info */}
          <div className="contact__info">
            <h3 className="contact__info-title">Let&apos;s Connect</h3>

            <a href="mailto:bhargvakikani9999@gmail.com" className="contact__card-link">
              <div className="contact__info-card">
                <i className="uil uil-envelope-alt contact__card-icon"></i>
                <div>
                  <h4 className="contact__card-title">Email</h4>
                  <span className="contact__card-data">bhargvakikani9999@gmail.com</span>
                </div>
              </div>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=7069135299&text=Hello, I saw your portfolio and would like to connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card-link"
            >
              <div className="contact__info-card">
                <i className="uil uil-whatsapp contact__card-icon"></i>
                <div>
                  <h4 className="contact__card-title">WhatsApp</h4>
                  <span className="contact__card-data">(+91) 70691 35299</span>
                </div>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="contact__form-wrapper">
            <h3 className="contact__info-title">Send a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-group">
                <input type="text" name="name" className="contact__form-input" placeholder="Enter your full name" required />
              </div>
              <div className="contact__form-group">
                <input type="email" name="email" className="contact__form-input" placeholder=" Enter your email" required />
              </div>
              <div className="contact__form-group">
                <input
                  type="text"
                  name="mobile"
                  className="contact__form-input"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div className="contact__form-group contact__form-area">
                <textarea
                  name="message"
                  className="contact__form-input"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="button button--flex" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                <i className="uil uil-message button__icon"></i>
              </button>
            </form>
          </div>
        </div>  
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar theme="dark" />
    </section>
  );
};

export default Contact;
