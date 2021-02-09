import React from 'react';
import s from "./YouTube.module.css";
import EloquentJS from "../../../images/books/EloquentJS.jpg"
import Grokaem from "../../../images/books/Grokaem.jpg"
import LearningReact from "../../../images/books/LearningReact.jpg"
import ReactHooks from "../../../images/books/ReactHooks.jpg"

const YouTube = () => {
    return (
        <section className={s.youTube}>
            <div className={s.heading}>
                <h2>YouTube channels that I've spent a total of at least 1200 hours on</h2>
            </div>
            <div className={s.content}>
                <div className={s.bookBox}>
                    <img src={EloquentJS}/>
                </div>
                <div className={s.bookBox}>
                    <img src={LearningReact}/>
                </div>
                <div className={s.bookBox}>
                    <img src={ReactHooks}/>
                </div>
                <div className={s.bookBox}>
                    <img src={Grokaem}/>
                </div>
            </div>
        </section>
    );
};

export default YouTube;
