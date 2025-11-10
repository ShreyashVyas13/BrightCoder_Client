import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* === LEFT: Contact Info === */}
        <div className="contact-info">
          <h1>📍 Contact Us</h1>
          <p>
            We’d love to hear from you! Reach out for collaborations, queries, or just to say hi.
          </p>

          <div className="info-block">
            <h3>Email</h3>
            <p>brightcoder@gmail.com</p>
          </div>

          <div className="info-block">
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-block">
            <h3>Address</h3>
            <p>Junagadh, Gujarat, India</p>
          </div>
        </div>

        {/* === RIGHT: Google Map === */}
        <div className="contact-map">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.398053563922!2d70.459585!3d21.522184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3957eea7dffac93b%3A0x1f4ec5c31ec23b9d!2sJunagadh%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
