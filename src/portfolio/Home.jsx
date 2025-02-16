import React from 'react';
import shamim from "../../public/me.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div>
      <section className="home" id="home">
        <div className="home-contact">
          <h1>it's <span>SHAMIM</span></h1>
          <h3 className="text-animation">I'm a <span></span></h3>
          <p>
            I specialize in building interactive, visually appealing, and user-friendly web interfaces.
            My goal is to deliver seamless and efficient user experiences through innovative designs and modern web technologies.
          </p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/shamim-ahmad-772484331/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
            </a>
            <a href="https://wa.me/8801748186766">
              <FontAwesomeIcon icon={faWhatsapp} className="icon whatsapp" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100092273649975&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
            </a>
          </div>

          <div className="btn-group">
            <a href="#" className="btn">Hire</a>
            <a href="#contact" className="btn">Contact</a>
          </div>
        </div>
        <div className="home-img">
          <img src={shamim} alt="Shamim Ahmad's picture" />
        </div>
      </section>
    </div>
  );
}
