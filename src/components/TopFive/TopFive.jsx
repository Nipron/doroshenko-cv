import React from 'react';
import s from "./TopFive.module.css";
import {Link} from "react-router-dom";

const TopFive = () => {
    return (
        <div className={s.pages}>
            <Link to="/myapps">TOP-FIVE <span>React projects</span></Link>
        </div>
    );
};

export default TopFive;