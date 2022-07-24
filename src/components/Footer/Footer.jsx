import React from "react";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <a className="footer__text" href="https://github.com/nancy-sun/portfolio">{"© 2022 designed & developed by Nancy Sun"}</a>
            <a className="footer__logo footer__logo--github" href="https://github.com/nancy-sun"></a>
            <a className="footer__logo footer__logo--linkedin" href="https://www.linkedin.com/in/-nancy-sun/"></a>
        </footer>
    )
}

export default Footer;