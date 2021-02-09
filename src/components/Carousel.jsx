import React, {useEffect, useState} from 'react';
import "./Carousel.scss";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import s from "./AppCard.module.css"
import ss from "./CarouselStyle.module.css"
import boutique from "../images/AppThumbnails/boutique.jpg"
import beerstore from "../images/AppThumbnails/beerstore.jpg"

const Carousel = () => {

    return (
            <section className={ss.myApps}>
                <OwlCarousel
                    items="1"
                    class="carousel owl-carousel"
                    loop="true"
                    center="true"
                    //autoplay="true"
                    autoWidth="true"
                    /*autoplayTimeout="5000"*/>

                    <div className="item">
                        <div className={s.wrap}>
                            <div className={s.card}>
                                <div className={s.heading}>
                                    Simple E-commerce project
                                </div>
                                <div className={s.picture}>
                                    <img src={beerstore} alt="beer store"/>
                                </div>
                                <div className={s.description}>
                                    <div> One of my first projects - simple E-commerce page with hardcoded data.</div>
                                    <div> Combination of Bootstrap 4 and Styled Components.</div>
                                </div>
                                <div className={s.icons}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="item">
                        <div className={s.wrap}>
                            <div className={s.card}>
                                <div className={s.heading}>
                                   E-commerce Project
                                </div>
                                <div className={s.pictureBox}>
                                    <img className={s.picture} src={boutique} alt=""/>
                                </div>
                                <div className={s.description}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                                <div className={s.icons}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className={s.wrap}>
                            <div className={s.card}>
                                <div className={s.heading}>
                                    Lorem ipsum dolor
                                </div>
                                <div className={s.picture}>
                                    <img src="#" alt=""/>
                                </div>
                                <div className={s.description}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                                <div className={s.icons}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className={s.wrap}>
                            <div className={s.card}>
                                <div className={s.heading}>
                                    Lorem ipsum dolor
                                </div>
                                <div className={s.picture}>
                                    <img src="#" alt=""/>
                                </div>
                                <div className={s.description}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                                <div className={s.icons}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>
                        </div>
                    </div>


                </OwlCarousel>
        </section>
    );
};

export default Carousel;
