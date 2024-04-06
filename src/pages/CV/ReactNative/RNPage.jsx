import React from 'react';
import s from "./RNPage.module.css";
import boutique from "./../../../images/AppThumbnails/boutique.png";
import {HashLink as Link} from "react-router-hash-link";
import Carousel from "../../../components/Carousel/Carousel";
import selfie from "../../../images/selfie.jpg";
import {useTranslation} from "react-i18next";

const RNPage = () => {

    const {t} = useTranslation();

    return (
        <section className={s.boutique}>
            <div className="anchor" id="rnpage"></div>
            <div className={s.heading}>
                <h2>React Native</h2>
            </div>
            <div className={s.content}>
                <div className={s.contentBox + ' ' + s.w50}>
                    <h3>SlotsCity</h3>
                    <p>{t("sc1")}</p>
                    <p>{t("sc2")}</p>
                    {/*<p>{t("sc3")}</p>*/}
                    <br/>
                    <p><a className={s.darkLink} href="https://slotscity.ua/casino-app" target="_blank">https://slotscity.ua/casino-app</a></p>
                </div>
                <div className={s.w50 + ' ' + s.back}>
                    <div className={s.carouselWrap}>
                        <Carousel/>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default RNPage;
