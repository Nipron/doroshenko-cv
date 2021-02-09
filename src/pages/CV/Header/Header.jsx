import React, {useEffect, useState} from 'react';
import s from "./Header.module.css";
import {Link} from "react-router-dom";

const Header = () => {

    const [headerStyle, setHeaderStyle] = useState(s.header)

    const listener = () => {
        if (window.scrollY > 0) setHeaderStyle(headerStyle + ' ' + s.sticky)
        else setHeaderStyle(s.header)
    }

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    });

    return (
        <header className={headerStyle}>
            <Link className={s.logo}>Portfolio</Link>
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Services</Link></li>
                <li><Link>Wopk</Link></li>
                <li><Link>Testimonials</Link></li>
                <li><Link to="/">Bender</Link></li>
            </ul>
        </header>
    );
};

export default Header;
