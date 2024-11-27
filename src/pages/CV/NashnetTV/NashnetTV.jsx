import React from 'react';
import s from "./NashnetTV.module.css";
import nashnettv from "./../../../images/AppThumbnails/garage.png";
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
                    <h3>Garage</h3>
                    <p>{t("garage")}</p>
                    <br/>
                    <p><a className={s.darkLink}  target="_blank" href="https://nms-group.agency">https://nms-group.agency</a></p>
                </div>

            </div>
        </section>

    );
};

export default NashnetTV;





