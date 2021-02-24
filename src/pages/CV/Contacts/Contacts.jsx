import React from 'react';
import s from "./Contacts.module.css";
import viber from "./../../../images/Logos/viber.png"
import whatsup from "./../../../images/Logos/whatsup.png"

const Contacts = () => {

    return (
        <section className={s.contacts}>
            <div className="anchor" id="contacts"></div>
            <div className={s.heading}>
                <h2>Contacts</h2>
            </div>
            <div className={s.content}>
                <div className={s.phone}>
                    <span>+38 099 033 80 05</span>
                    <img className={s.viber} src={viber} alt="viber"/>
                    <img className={s.whatsup} src={whatsup} alt="whatsup"/>
                </div>
                <div className={s.email}>
                    <span>2328221@ukr.net</span>
                </div>
            </div>
        </section>

    );
};

export default Contacts;
