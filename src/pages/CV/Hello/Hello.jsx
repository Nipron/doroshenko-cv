import React from 'react';
import s from "./Hello.module.css";
import {HashLink as Link} from 'react-router-hash-link';
import Typing from "../../../components/Typing/Typing";

const Hello = () => {

    const typing = ["Rookie", "Developer", "Enthusiast", "Apprentice", "Dreamer"]

    return (
        <section id="hello" className={s.banner}>
            <div className={s.textBox}>
                <h2>Hello, I'm</h2>
                <div className={s.vit}>Vitalii Doroshenko</div>
                <h3>I am a React <Typing typing={typing}/></h3>
                <Link className={s.btn} to="#about" >About me</Link>
            </div>
        </section>
    );
};

export default Hello;
