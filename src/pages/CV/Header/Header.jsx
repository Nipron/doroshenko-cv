import React, {useEffect, useState} from 'react';
import s from "./Header.module.css";
import { HashLink } from 'react-router-hash-link';
import {Link} from "react-router-dom";

const Header = () => {

    const [headerStyle, setHeaderStyle] = useState(s.header)
    const [toggleStyle, setToggleStyle] = useState(s.toggle)
    const [menuStyle, setMenuStyle] = useState(s.menu)

    const listener = () => {
        setHeaderStyle(window.scrollY > 0 ? s.header + ' ' + s.sticky : s.header)
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
            <Link className={s.logo}>Portfolio</Link>
            <div className={toggleStyle} onClick={handleToggle}></div>
            <ul className={menuStyle}>
                <li><HashLink to="#hello" onClick={handleToggle}>Home</HashLink></li>
                <li><HashLink to="#about" onClick={handleToggle}>About</HashLink></li>
                <li><HashLink to="#boutique" onClick={handleToggle}>Projects</HashLink></li>
                <li><HashLink to="#youtube" onClick={handleToggle}>Studying</HashLink></li>
                <li><HashLink>Contacts</HashLink></li>
                <li><Link to="/">Bender</Link></li>
            </ul>
        </div>
    );
};

export default Header;
