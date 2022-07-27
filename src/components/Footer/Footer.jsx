import React from "react";
import { useSelector } from "react-redux";
import "./Footer.scss";

function Footer() {
    const theme = useSelector((state) => state.theme);

    return (
        <footer className="footer">
            <a target="_blank" className="footer__text" href="https://github.com/nancy-sun/portfolio">{"© 2022 designed & developed by Nancy Sun"}</a>
            <a target="_blank" className={theme.darkTheme ? "footer__logo footer__logo--github footer__logo--dark" : "footer__logo footer__logo--github"} href="https://github.com/nancy-sun"></a>
            <a target="_blank" className={theme.darkTheme ? "footer__logo footer__logo--linkedin footer__logo--dark" : "footer__logo footer__logo--linkedin"} href="https://www.linkedin.com/in/-nancy-sun/"></a>
        </footer>
    )
}

export default Footer;