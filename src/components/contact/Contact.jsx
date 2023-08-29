import './contact.css';
import { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';
import React from 'react';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_77jj0pm',
        'template_e2zarfe',
        formRef.current,
        'tFlG-kxMVJx1pwqvz'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img
                className="c-icon"
                src="https://img.freepik.com/free-icon/email_318-859700.jpg?t=st=1692110812~exp=1692111412~hmac=ad91e9064fa6147f23ce8fbfb16139c508860ca5e04d8ddaf7fbcf4fb1b30437"
                alt=""
              />
              <a
                id="emailLink"
                href="mailto:divyanshuchoubey05@gmail.com"
                style={{ color: darkMode ? 'white' : 'blue' }}
              >
                divyanshuchoubey05@gmail.com
              </a>
            </div>
            <div className="c-info-item">
              <img
                className="c-icon"
                src="https://img.freepik.com/premium-vector/location-background-vector_609277-6278.jpg?w=740"
                alt=""
              />
              New Delhi , India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>
              "Thank you for considering me.I'm excited to discuss your project
              further and explore how my skills can contribute."
            </b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              style={{
                backgroundColor: darkMode ? '#333' : 'white', // Change the background color based on dark mode
                resize: 'none',
              }}
              rows="5"
              placeholder="Message"
              name="message"
              required
            />
            <button>Submit</button>
            {done && (
              <div className="success-message">
                Thank you, your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
