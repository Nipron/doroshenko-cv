import React from 'react';
import s from "./Hello.module.css";
import {HashLink as Link} from 'react-router-hash-link';
import Typing from "../../../components/Typing/Typing";
import boutique from "../../../images/AppThumbnails/boutique.png";

const Hello = () => {

    const typing = ["Rookie", "Developer", "Autodidact", "Enthusiast", "Apprentice", "Dreamer"]

    return (
        <section id="hello" className={s.banner}>
            <div className={s.textBox}>
                <h2>Hello, I'm</h2>
                <div className={s.vit}>Vitalii Doroshenko</div>
                <h3>I am a React <Typing typing={typing}/></h3>
                {/*<Link className={s.btn} to="#about" >About me</Link>*/}
                <div className={s.btn}>
                    <a target="_blank"
                       href="https://drive.google.com/file/d/1Etx95y7-eFyauwlZLfogKWQrzRmoc_eF/view?usp=sharing"
                       rel="noreferrer">
                       DOWNLOAD APP
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hello;
