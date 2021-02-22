import React from 'react';
import s from "./About.module.css";
import selfie from "./../../../images/selfie.jpg";
import {HashLink as Link} from "react-router-hash-link";

const About = () => {

    const ttt = [1, 2, 3, 4, 4, 1, 4, 3, 1, 4, 1, 4, 4, 4, 4, 4, 0, 7]

    function func(arr) {
        let uniq = {}
        arr.forEach(el => {
            (!uniq[el]) ? uniq[el] = 1 : uniq[el]++
        })
        let max = 0;
        for (let key in uniq) {
            if (uniq[key] > max) max = uniq[key]
        }
        return max
    }

    console.log(func(ttt));

    return (
        <section className={s.about}>
            <div className="anchor" id="about"></div>
            <div className={s.heading}>
                <h2>About Me</h2>
            </div>
            <div className={s.content}>
                <div className={s.w50}>
                    <img src={selfie} className="img"/>
                </div>
                <div className={s.contentBx + ' ' + s.w50}>
                    <p>Hi, I’m Vitalii! I am a React autodidact with no commercial experience, but, nevertheless,
                        feel myself ready to become a full-time React developer.</p>
                    <p>I’ve been studying React (along with HTML, CSS, vanilla JS, Redux, Node, APIs, DBs, git and
                        so on) for more than a year and a half now.</p>
                    <p>I’ve tried to apply my knowledge and skills in various small projects, most of which will find
                        their application in real life (you can find all source code at my
                        <a className={s.gitHubLink}
                            target="_blank"
                           href="https://github.com/Nipron"> GitHub</a>.</p>
                    <div className={s.btnWrap}>
                        <Link className={s.btn}>Download full CV</Link>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default About;
