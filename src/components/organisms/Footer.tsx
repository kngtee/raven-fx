const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p className="footer__text">
          © {new Date().getFullYear()} Sisyphus Exchange
        </p>
      </div>
      <div className="footer__center">
        <a href="https://getravenbank.com/contact" className="footer__link">
          Contact
        </a>
      </div>
      <div className="footer__right">
        <a
          href="https://twitter.com"
          target="_blank"
          className="footer__icon"
          rel="noreferrer"
        >
          🐦
        </a>
        <a
          href="https://github.com"
          target="_blank"
          className="footer__icon"
          rel="noreferrer"
        >
          🐱
        </a>
      </div>
    </footer>
  );
};

export default Footer;
