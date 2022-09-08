import React, {useEffect, useState} from 'react';
import s from "./Header.module.css";
import {HashLink as Link} from 'react-router-hash-link';
import {useTranslation} from "react-i18next";

const Header = () => {

    const {t, i18n} = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);

    };

    const [selected, setSelected] = useState('EN');

    const handleChange = lang => {
        setSelected(lang)
       // window.location.reload();
    }

    useEffect(() => {
        switch (selected) {
            case "EN":
                changeLanguage("en")
                break;
            case "DE":
                changeLanguage("de")
                break;
            default:
                changeLanguage("en")
        }
    }, [selected])

    const [headerStyle, setHeaderStyle] = useState(s.header)
    const [toggleStyle, setToggleStyle] = useState(s.toggle)
    const [menuStyle, setMenuStyle] = useState(s.menu)
    // const [h, seth] = useState(window.innerHeight)
    // const [w, setw] = useState(window.innerWidth)

    const listener = () => {
        setHeaderStyle(window.scrollY > 0 ? s.header + ' ' + s.sticky : s.header)
        //  seth(window.innerHeight)
        //  setw(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    });

    const handleToggle = () => {
        setToggleStyle(window.innerWidth < 992 && toggleStyle === s.toggle ? s.toggle + ' ' + s.active : s.toggle);
        setMenuStyle(window.innerWidth < 992 && menuStyle === s.menu ? s.menu + ' ' + s.activeMenu : s.menu);
    }

    return (
        <div className={headerStyle}>
            <div className={s.logo}>
                {/*<Link className={s.logo}>PORTFOLIO</Link>*/}
                <Link className={s.lang + (selected === "DE" ? " " + s.opa : "")} onClick={() => handleChange("EN")}>EN</Link>
                <Link className={s.lang + (selected === "EN" ? " " + s.opa : "")} onClick={() => handleChange("DE")}>DE</Link>
            </div>

            <div className={toggleStyle} onClick={handleToggle}></div>
            <ul className={menuStyle}>
                <li><Link to="#hello" onClick={handleToggle}>{t("home")}</Link></li>
                <li><Link to="#react" onClick={handleToggle}>React</Link></li>
                <li><Link to="#boutique" onClick={handleToggle}>React Native</Link></li>
                <li><Link to="#about" onClick={handleToggle}>{t("about")}</Link></li>
                <li><Link to="#contacts" onClick={handleToggle}>{t("contacts")}</Link></li>
                {/*<li><Link to="/">Bender</Link></li>*/}
            </ul>
        </div>
    );
};

export default Header;
