import React from "react";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <a className="footer__logo" href="https://github.com/nancy-sun/portfolio">{"© 2022 designed & developed by Nancy Sun"}</a>
            <a className="footer__logo" href="https://github.com/nancy-sun">github</a>
            <a className="footer__text" href="https://www.linkedin.com/in/-nancy-sun/">linkedin</a>
        </footer>
    )
}

export default Footer;