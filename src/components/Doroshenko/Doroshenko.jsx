import React from 'react';
import s from "./Doroshenko.module.css";
import { HashLink as Link } from 'react-router-hash-link';

const Doroshenko = () => {
    return (
        <div className={s.doroshenko}>
                <Link to="/cv">VITALII <span>DOROSHENKO</span></Link>
            <div className={s.text}>
                HE'S BACK, AND HE'S
            </div>
            <div className={s.text}>
                SMOKING', BABY!
            </div>
        </div>
    );
};

export default Doroshenko;
