import React from 'react';
import s from "./TopFive.module.css";
import { HashLink as Link } from 'react-router-hash-link';

const TopFive = () => {
    return (
        <div className={s.topFive}>
            <Link to="/cv#boutique">TOP-FIVE <span>React projects</span></Link>
        </div>
    );
};

export default TopFive;