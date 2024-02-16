import React from 'react';
import s from "./Goodness.module.css";
import boutique from "./../../../images/AppThumbnails/boutique.png";
import {HashLink as Link} from "react-router-hash-link";
import goodness from "../../../images/AppThumbnails/goodness.png";
import {useTranslation} from "react-i18next";

const Goodness = () => {

    const {t} = useTranslation();

    return (
        <section className={s.boutique}>
            <div className={s.content}>
                <div className={s.contentBox + ' ' + s.w50}>
                    <h3>Goodness</h3>
                    {/*<p>{t("goodness1")} <a className={s.darkLink} target="_blank" href="https://lightcore.io/">LightCore</a> {t("goodness2")}</p>*/}
                    <p>{t("goodness1")} <a className={s.darkLink} target="_blank" href="ua.slotscity:///cashier">Slots City</a> {t("goodness2")}</p>
                </div>
                <div className={s.w50}>
                    <img src={goodness} className="img" alt="selfie"/>
                </div>
            </div>
        </section>

    );
};

export default Goodness;
