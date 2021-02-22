import React from 'react';
import header from '../../images/header.png';
import bender from "../../images/bender.png";
import s from './MainPage.module.css';
import Doroshenko from "../../components/Doroshenko/Doroshenko";
import TopFive from "../../components/TopFive/TopFive";
import TrueStory from "../../components/TrueStory/TrueStory";
import Sith from "../../components/Sith/Sith";

const Main = () => {

    /*  let arrStock = [1, 21, 1, 1, 1, 1, 20, 1, 1, 1, 2]

      const profit = arr => arr.reduce((acc, el, i) => (arr.indexOf(Math.max(...arr)) === 0)
          ? 0
          : (el === Math.max(...arr))
              ? arr.slice(0, i).reduce((acc, el) => acc + arr[i] - el
              , 0) + profit(arr.slice(i + 1))
              : acc
          , 0)

      console.log(profit(arrStock));*/



    return (
        <div className={s.main}>
            <img className={s.header} src={header} alt="header"/>
            <img className={s.bender} src={bender} alt="bender"/>
            <Doroshenko/>
            <TopFive/>
            <TrueStory/>
            <Sith/>
        </div>
    );
};

export default Main;