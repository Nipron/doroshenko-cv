import React from 'react';
import sith from '../../images/sith.png';
import s from './Sith.module.css';
import {HashLink as Link} from 'react-router-hash-link';

const Sith = () => {
    return (
        <div className={s.sith}>
            <Link to="/cv#youtube">
                <img src={sith} alt="sith"/>
            </Link>
        </div>
    );
};

export default Sith;