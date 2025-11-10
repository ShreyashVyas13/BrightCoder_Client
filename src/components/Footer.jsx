import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <h2>Bright Coder</h2>
          <p>
            Learn coding the smart way — tutorials, blogs & examples at one
            place.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/tutorial">Tutorials</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: brightcoder@gmail.com</p>
          <p>Junagadh, Gujarat (India)</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} BrightCoder • Built with MERN • All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
