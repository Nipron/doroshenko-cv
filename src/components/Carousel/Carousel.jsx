import "./Carousel.scss";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import s from "./AppCard.module.css";
import boutique from "../../images/AppThumbnails/boutique.jpg";
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

                {/* beer store */}
                <div className="item">
                    <a target="_blank"
                       href="https://doroshenko-beerstore.netlify.app"
                       rel="noreferrer">
                        <div className={s.wrap}>
                            <div className={s.card}>
                                <div className={s.heading}>
                                    Beer Store
                                </div>
                                <div className={s.picture}>
                                    <img src={beerstore} alt="beerstore"/>
                                </div>
                                <div className={s.description}>
                                    <div>One of my first projects - a simple no-redux E-commerce project with hardcoded
                                        data.
                                    </div>
                                    <div>Combination of Bootstrap 4 and Styled Components.</div>
                                    <div>PayPal sandbox payments.</div>
                                </div>
                                <div className={s.icons}>
                                    <img className={s.iconZ} src={react} alt="react"/>
                                    <img className={s.iconZ} src={bootstrap} alt="bootstap"/>
                                    <img className={s.iconZ} src={styled} alt="bootstap"/>
                                    <img className={s.iconZ} src={paypal} alt="bootstap"/>
                                </div>

                            </div>
                        </div>
                    </a>
                </div>

                {/* memories */}
                <div className="item">
                    <a target="_blank"
                       href="https://doroshenko-memories.netlify.app"
                       rel="noreferrer">
                        <div className={s.wrap}>
                            <div className={s.card}>

                                <div className={s.heading}>
                                    Memories (MERN)
                                </div>
                                <div className={s.picture}>
                                    <img src={memories} alt="memories"/>
                                </div>
                                <div className={s.description}>
                                    <div>A full stack MERN (MongoDB - Express.js - React.js - Node.js) project.</div>
                                    <div>Deployed on Heroku (server) and Netlify (client).</div>
                                    <div>Styled with Material-UI.</div>
                                </div>
                                <div className={s.icons}>
                                    <img className={s.iconZ} src={react} alt="react"/>
                                    <img className={s.iconZ} src={redux} alt="redux"/>
                                    <img className={s.iconZ} src={node} alt="node"/>
                                    <img className={s.iconZ} src={express} alt="express"/>
                                    <img className={s.iconZ} src={mongodb} alt="mongodbi"/>
                                    <img className={s.iconZ} src={materialui} alt="matrialui"/>
                                </div>

                            </div>
                        </div>
                    </a>
                </div>

                {/* hotel */}
                <div className="item">
                    <a target="_blank"
                       href="https://doroshenko-hotel.netlify.app"
                       rel="noreferrer">
                        <div className={s.wrap}>
                            <div className={s.card}>

                                <div className={s.heading}>
                                    Hotel (Contentful)
                                </div>
                                <div className={s.picture}>
                                    <img src={hotel} alt="hotel"/>
                                </div>
                                <div className={s.description}>
                                    <div>A hotel site with Contentful DB.</div>
                                    <div>Live weather forecast from OpenWeatherMap.org APIs.</div>
                                    <div>Styled with pure CSS (Sass).</div>
                                </div>

                                <div className={s.icons}>
                                    <img className={s.iconZ} src={react} alt="react"/>
                                    <img className={s.iconZ} src={redux} alt="redux"/>
                                    <img className={s.iconZ} src={contentful} alt="contentful"/>
                                    <img className={s.iconZ} src={openweathermap} alt="openweathermap"/>
                                    <img className={s.iconZ} src={sass} alt="sass"/>
                                </div>

                            </div>
                        </div>
                    </a>
                </div>


            </OwlCarousel>
        </section>
    );
};

export default Carousel;
