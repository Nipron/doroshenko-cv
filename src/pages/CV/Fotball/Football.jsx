import React from 'react';
import s from "./Football.module.css";
import football from "../../../images/AppThumbnails/football.png";
import {useTranslation} from "react-i18next";

const Football = () => {

    const {t} = useTranslation();

    return (
        <section className={s.boutique}>
            <div className={s.content}>
                <div className={s.contentBox + ' ' + s.w50}>
                    <h3>=Football</h3>
                    <p>{t("fotball")}</p>
                </div>
                <div className={s.w50}>
                    <img src={football} className="img" alt="selfie"/>
                </div>
            </div>
        </section>

    );
};

export default Football;
