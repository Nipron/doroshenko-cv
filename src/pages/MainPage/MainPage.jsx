import React from 'react';
import header from '../../images/header.png';
import bender from "../../images/bender.png";
import s from './MainPage.module.css';
import Doroshenko from "../../components/Doroshenko/Doroshenko";
import TopFive from "../../components/TopFive/TopFive";

const Main = () => {
    return (
        <div className={s.main}>
            <img className={s.header} src={header} alt="header"/>
            <img className={s.bender} src={bender} alt="bender"/>
            <Doroshenko/>
            <TopFive/>
        </div>
    );
};

export default Main;
