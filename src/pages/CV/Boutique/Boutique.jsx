import React from 'react';
import s from "./Boutique.module.css";
import boutique from "../../../images/AppThumbnails/boutique.jpg";
import react from "../../../images/Logos/react.png";
import bootstrap from "../../../images/Logos/bootstrap.png";
import styled from "../../../images/Logos/styled.png";
import paypal from "../../../images/Logos/paypal.png";

const Boutique = () => {
    return (
        <section>
            <div className={s.wrap}>
                <div className={s.card}>
                    <div className={s.heading}>
                        Simple E-commerce project
                    </div>
                    <div className={s.picture}>
                        <img src={boutique} alt="beer store"/>
                    </div>
                    <div className={s.description}>
                        <div>One of my first projects - simple E-commerce project with hardcoded data.</div>
                        <div>Combination of Bootstrap 4 and Styled Components.</div>
                        <div>PayPal sandbox payments.</div>
                    </div>
                    <div className={s.icons}>

                        <img className={s.iconZ} src={react} alt="bootstap"/>
                        <img className={s.iconZ} src={bootstrap} alt="bootstap"/>
                        <img className={s.iconZ} src={styled} alt="bootstap"/>
                        <img className={s.iconZ} src={paypal} alt="bootstap"/>


                        {/*<img className={s.icon} src={bootstrap}/>
                                    <img className={s.icon} src={bootstrap}/>
                                    <img className={s.icon} src={bootstrap}/>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Boutique;
