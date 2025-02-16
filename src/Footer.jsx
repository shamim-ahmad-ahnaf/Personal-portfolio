import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
    
        <div className="footer-column">
          <h3>Stay Connected</h3>
          <div className="social">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium impedit accusamus, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dignissimos nam quo eaque veniam aspernatur aliquam maiores est deleniti eos? nostrum adipisci culpa veritatis eos placeat odio dicta pariatur?</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/shamim-ahmad-772484331/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://wa.me/8801748186766" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100092273649975&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
 
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#education">My Skill</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <p><i className="fas fa-envelope"></i> Email: <a href="mailto:shamimahmadahnaf@gmail.com">shamimahmadahnaf@gmail.com</a></p>
            <p><i className="fas fa-phone"></i> Phone: <a href="tel:+8801748186766">+880 1748 186766, 01604171812</a></p>
          </div>

          <div className="subscribe">
            <h3>Subscribe for Updates</h3>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
     
      <p className="cpyright">
        <br />
        &copy; 2025 Shamim Ahmad | All Rights Reserved
      </p>

  
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    </footer>
  );
}
