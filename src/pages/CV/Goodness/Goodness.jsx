import React from 'react';
import s from "./Goodness.module.css";
import goodness from "./../../../images/AppThumbnails/goodness.png";
import {useTranslation} from "react-i18next";

const Goodness = () => {

    const {t} = useTranslation();

    return (
        <section className={s.about}>
            <div className={s.content}>
                <div className={s.w50}>
                    <img src={goodness} className="img" alt="selfie"/>
                </div>
                <div className={s.contentBox + ' ' + s.w50}>
                    <h3>Goodness</h3>
                    <p>{t("goodness1")} <a>LightCore</a> {t("goodness2")}</p>
                </div>

            </div>
        </section>

    );
};

export default Goodness;
