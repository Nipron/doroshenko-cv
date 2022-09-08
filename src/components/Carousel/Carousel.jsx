import "./Carousel.scss";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import s from "./AppCard.module.css";
import beerstore from "../../images/AppThumbnails/beerstore.jpg";
import memories from "../../images/AppThumbnails/memories.jpg";
import hotel from "../../images/AppThumbnails/hotel.jpg";


import bootstrap from "../../images/Logos/bootstrap.png";
import contentful from "../../images/Logos/contentful.png";
import express from "../../images/Logos/express.png";
import firebase from "../../images/Logos/firebase.png";
import materialui from "../../images/Logos/materialui.svg";
import mongodb from "../../images/Logos/mongodb.png";
import node from "../../images/Logos/node.png";
import openweathermap from "../../images/Logos/openweathermap.png";
import paypal from "../../images/Logos/paypal.png";
import react from "../../images/Logos/react.png";
import redux from "../../images/Logos/redux.png";
import sass from "../../images/Logos/sass.svg.png";
import styled from "../../images/Logos/styled.png";
import typescript from "../../images/Logos/typescript.png";
import selfie from "../../images/selfie.jpg";
import sc1 from "../../images/AppThumbnails/sc1.jpg";
import sc2 from "../../images/AppThumbnails/sc2.png";
import sc3 from "../../images/AppThumbnails/sc3.jpg";
import sc4 from "../../images/AppThumbnails/sc4.jpg";
import sc5 from "../../images/AppThumbnails/sc5.jpg";
import sc6 from "../../images/AppThumbnails/sc6.jpg";
import sc7 from "../../images/AppThumbnails/sc7.png";
import sc8 from "../../images/AppThumbnails/sc8.png";
import React from "react";

const Carousel = () => {

    return (
        <section className={s.myApps}>
            <OwlCarousel
                items="1"
                class="carousel owl-carousel"
                loop="true"
                center="true"
                autoplay="true"
                autoWidth="true"
                /*autoplayTimeout="5000"*/>


                <div className="item">
                    <div className={s.wrap}>
                        <img src={sc1} className={s.imgSC} alt="selfie"/>
                    </div>
                </div>
                <div className="item">
                    <div className={s.wrap}>
                        <img src={sc2} className={s.imgSC} alt="selfie"/>
                    </div>
                </div>
                <div className="item">
                    <div className={s.wrap}>
                        <img src={sc3} className={s.imgSC} alt="selfie"/>
                    </div>
                </div>
                <div className="item">
                    <div className={s.wrap}>
                        <img src={sc4} className={s.imgSC} alt="selfie"/>
                    </div>
                </div>
                <div className="item">
                    <div className={s.wrap}>
                        <img src={sc5} className={s.imgSC} alt="selfie"/>
                    </div>
                </div>
                <div className="item">
                    <div className={s.wrap}>
                        <img src={sc6} className={s.imgSC} alt="selfie"/>
                    </div>
                </div>
                <div className="item">
                    <div className={s.wrap}>
                        <img src={sc7} className={s.imgSC} alt="selfie"/>
                    </div>
                </div>
                <div className="item">
                    <div className={s.wrap}>
                        <img src={sc8} className={s.imgSC} alt="selfie"/>
                    </div>
                </div>

            </OwlCarousel>
        </section>
    );
};

export default Carousel;
