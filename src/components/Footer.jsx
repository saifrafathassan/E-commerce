import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <li>About</li>
          <li>Store locator</li>
          <li>FAQs</li>
          <li>News</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </div>
        <p className="love">
          Created &nbsp; With love by {" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://github.com/saifrafathassan"
          >
            &nbsp; Saif Rafat
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;