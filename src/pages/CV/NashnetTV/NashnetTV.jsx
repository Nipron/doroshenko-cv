import React from 'react';
import s from "./NashnetTV.module.css"
import nashnettv from "./../../../images/AppThumbnails/nashnettv.png";
import {useTranslation} from "react-i18next";

const NashnetTV = () => {

    const {t} = useTranslation();

    return (
        <section className={s.about}>
            <div className={s.content}>
                <div className={s.w50}>
                    <img src={nashnettv} className="img" alt="selfie"/>
                </div>
                <div className={s.contentBox + ' ' + s.w50}>
                    <h3>NashnetTV</h3>
                    <p>{t("nashnettv")}</p>
                </div>
            </div>
        </section>

    );
};

export default NashnetTV;





