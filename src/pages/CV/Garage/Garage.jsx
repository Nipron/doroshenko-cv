import React from 'react';
import s from "./Garage.module.css";
import garage from "./../../../images/AppThumbnails/garage.png";
import {useTranslation} from "react-i18next";

const Garage = () => {

    const {t} = useTranslation();

    return (
        <section className={s.about}>
            <div className={s.content}>
                <div className={s.w50}>
                    <img src={garage} className="img" alt="selfie"/>
                </div>
                <div className={s.contentBox + ' ' + s.w50}>
                    <h3>Garage</h3>
                    <p>{t("goodness1")} <a>LightCore</a> {t("goodness2")}</p>
                </div>

            </div>
        </section>

    );
};

export default Garage;





