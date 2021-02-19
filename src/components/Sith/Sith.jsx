import React from 'react';
import sith from '../../images/sith.png';
import s from './Sith.module.css';

const Sith = () => {
    return (
        <div className={s.sith} >
            <img src={sith} alt="sith"/>
        </div>
    );
};

export default Sith;