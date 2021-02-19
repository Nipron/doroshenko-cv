import React from 'react';
import s from "./Hello.module.css";
import {Link} from "react-router-dom";
import Typing from "../../../components/Typing/Typing";

const Hello = () => {

    const typing = ["Rookie", "Developer", "Enthusiast", "Apprentice", "Dreamer"]

    return (
        <section id="hello" className={s.banner}>
            <div className={s.textBx}>
                <h2>Hello, I'm</h2>
                <div className={s.vit}>Vitalii Doroshenko</div>
                <h3>I am a React <Typing typing={typing}/></h3>
                <Link className={s.btn}>About me</Link>
            </div>
        </section>
    );
};

export default Hello;
