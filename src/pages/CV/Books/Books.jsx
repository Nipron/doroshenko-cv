import React from 'react';
import s from "./Books.module.css";
import EloquentJS from "../../../images/books/EloquentJS.jpg"
import Grokaem from "../../../images/books/Grokaem.jpg"
import LearningReact from "../../../images/books/LearningReact.jpg"
import ReactHooks from "../../../images/books/ReactHooks.jpg"

const Books = () => {
    return (
        <section className={s.books}>
            <div className={s.heading}>
                <h2>Books that I've read at least 3 pages of</h2>
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

export default Books;
