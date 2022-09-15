import React, {useEffect, useState} from 'react';
import s from "./Hello.module.css";
import {HashLink as Link} from 'react-router-hash-link';
import Typing from "../../../components/Typing/Typing";
import boutique from "../../../images/AppThumbnails/boutique.png";

import {useTranslation} from "react-i18next";

const Hello = () => {

    const {t, i18n} = useTranslation();
    const typing = [t("developer"), t("autodidact"), t("designer"), t("enthusiast"), t("dreamer"),]

    return (
        <section id="hello" className={s.banner}>
            <div className={s.textBox}>
                <h2>{t("hello")}</h2>
                {/*} <a href="ua.slotscity://cashier/Vitalik">*/}
                <div className={s.vit}>Vitalii</div>
                <div className={s.vit}>Doroshenko</div>
                {/*</a>*/}
                {
                    i18n.language === "en" ?
                        <h3 key="en">{t("react")}<Typing typing={typing}/></h3> :
                        <h3 key="de">{t("react")}<Typing typing={typing}/></h3>
                }

                <Link className={s.btn} to="#about">{t("about")}</Link>
                {/*<div className={s.btn}>
                    <a target="_blank"
                       href="https://drive.google.com/file/d/1Etx95y7-eFyauwlZLfogKWQrzRmoc_eF/view?usp=sharing"
                       rel="noreferrer">
                       DOWNLOAD APP
                    </a>
                </div>*/}
            </div>
        </section>
    );
};

export default Hello;
