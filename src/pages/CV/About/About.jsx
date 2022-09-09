import React from 'react';
import s from "./About.module.css";
import selfie from "./../../../images/selfie.jpg";
import {HashLink as Link} from "react-router-hash-link";
import cv from "./../../../files/Doroshenko_CV.pdf"
import {useTranslation} from "react-i18next";

const About = () => {

    const {t} = useTranslation();

    return (
        <section className={s.about}>
            <div className="anchor" id="about"></div>
            <div className={s.heading}>
                <h2>{t("about")}</h2>
            </div>
            <div className={s.content}>
                <div className={s.w50}>
                    <img src={selfie} className="img" alt="selfie"/>
                </div>
                <div className={s.contentBox + ' ' + s.w50}>
                    <p>{t("about1")}</p>
                    <p>{t("about2")}</p>
                    <p>{t("about3")}</p>
                    <p>{t("about4")}</p>
                    <p>{t("about5")}</p>
                    <br/>
                    <div className={s.btnWrap}>
                        <Link className={s.btn} to={cv} target="_blank" download>Download full CV</Link>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default About;
