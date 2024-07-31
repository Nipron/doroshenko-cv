import React from 'react';
import s from "./Contacts.module.css";
import viber from "./../../../images/Logos/viber.png"
import whatsup from "./../../../images/Logos/whatsup.png"
import {useTranslation} from "react-i18next";

const Contacts = () => {

    const {t} = useTranslation();

    return (
        <section className={s.contacts}>
            <div className="anchor" id="contacts"></div>
            <div className={s.heading}>
                <h2>{t("contacts")}</h2>
            </div>
            <div className={s.content}>
                <div className={s.phone}>
                    <span>+420 773 117 926</span>
                    {/* <img className={s.viber} src={viber} alt="viber"/> */}
                    <img className={s.whatsup} src={whatsup} alt="whatsup"/>
                </div>
                <div className={s.email}>
                    <span>react.sith@gmail.com</span>
                </div>
            </div>
        </section>

    );
};

export default Contacts;
