import React from 'react';
import s from "./About.module.css";
import pivo from "./../../../images/pivo.jpg";

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
            <div className={s.heading}>
                <h2>About Me</h2>
            </div>
            <div className={s.content}>
                <div className={s.contentBx + ' ' + s.w50}>
                    <h3>I'm a React Enthusiast</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur dolore iusto quam,
                        quas reiciendis vel voluptatibus? Ad architecto asperiores aut consectetur, dolores esse
                        laboriosam magnam molestias numquam optio, saepe.<br/><br/>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Laboriosam, qui, sed? Aliquid aspernatur cupiditate deleniti
                        facilis impedit ipsam iusto labore laboriosam minus officiis pariatur placeat quos ratione sint
                        tempora, veniam.</p>
                </div>
                <div className={s.w50}>
                    <img src={pivo} className="img"/>
                </div>
            </div>
        </section>

    );
};

export default About;
