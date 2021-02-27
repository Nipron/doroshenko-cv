import React from 'react';
import sith from '../../images/sith.png';
import s from './Sith.module.css';
import {HashLink as Link} from 'react-router-hash-link';

const Sith = () => {
    return (
        <Link to="/cv#youtube" className={s.sith}>
            <div className={s.sithPic}>
                <img src={sith} alt="sith"/>
            </div>
            <span></span>
        </Link>
    );
};

export default Sith;