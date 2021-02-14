import React, {useEffect, useState} from 'react';
import s from "./Header.module.css";
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
        setToggleStyle(toggleStyle === s.toggle ? s.toggle + ' ' + s.active : s.toggle);
        setMenuStyle(menuStyle === s.menu ? s.menu + ' ' + s.activeMenu : s.menu);
    }

    return (
        <header className={headerStyle}>
            <Link className={s.logo}>Portfolio</Link>
            <div className={toggleStyle} onClick={handleToggle}></div>
            <ul className={menuStyle}>
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Services</Link></li>
                <li><Link>Work</Link></li>
                <li><Link>Testimonials</Link></li>
                <li><Link to="/">Bender</Link></li>
            </ul>
        </header>
    );
};

export default Header;
