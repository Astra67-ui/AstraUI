function Footer() {
  return (
    <footer>
      <div className="footer-col">
        <div className="footer-label">Phone</div>
        <a className="footer-value">
          +63 976 314 0012
        </a>
      </div>

      <div className="footer-col">
        <div className="footer-label">Email</div>
        <a
          className="footer-value"
          href="mailto:luckypili.bautista05@gmail.com"
        >
          luckypili.bautista05@gmail.com
        </a>
      </div>

      <div className="footer-col">
        <div className="footer-label">Socials</div>
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/lucky-bautista-01300437a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/Astra67-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.facebook.com/luckytrayblox"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/lpb.astra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
      </div>

      <div className="footer-copy">
        <span>© 2026 By Bautista Lucky</span>
      </div>
    </footer>
  );
}

export default Footer;
