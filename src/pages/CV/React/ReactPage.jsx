import React from 'react';
import s from "./ReactPage.module.css";
import veria from "./../../../images/AppThumbnails/veria.png";
import {useTranslation} from "react-i18next";

const ReactPage = () => {

    const {t} = useTranslation();

    return (
        <section className={s.about}>
            <div className="anchor" id="react"></div>
            <div className={s.heading}>
                <h2>React</h2>
            </div>
            <div className={s.content}>
                <div className={s.w50}>
                    <img src={veria} className="img" alt="selfie"/>
                </div>
                <div className={s.contentBox + ' ' + s.w50}>
                    <p>{t("react1")}</p>
                    <p>{t("react2")}</p>
                    <p>{t("react3")}</p>
                    <br/>
                    <p><a href="https://easyplan-clickmat.veria.dk" target="_blank">https://easyplan-clickmat.veria.dk</a></p>
                </div>

            </div>
        </section>

    );
};

export default ReactPage;
