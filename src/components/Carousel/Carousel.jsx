import "./Carousel.scss";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import s from "./AppCard.module.css";
import boutique from "../../images/AppThumbnails/boutique.jpg";
import beerstore from "../../images/AppThumbnails/beerstore.jpg";
import bootstrap from "../../images/Logos/bootstrap.png";
import styled from "../../images/Logos/styled.png";
import react from "../../images/Logos/react.png";
import paypal from "../../images/Logos/paypal.png";
import firebase from "../../images/Logos/firebase.png";
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

                <div className="item">
                    <div className={s.wrap}>
                        <div className={s.card}>
                            <div className={s.heading}>
                                Socks Boutique
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
                                <img className={s.iconZ} src={firebase} alt="bootstap"/>
                                <img className={s.iconZ} src={typescript} alt="bootstap"/>


                                {/*<img className={s.icon} src={bootstrap}/>
                                    <img className={s.icon} src={bootstrap}/>
                                    <img className={s.icon} src={bootstrap}/>*/}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className={s.wrap}>
                        <div className={s.card}>
                            <div className={s.heading}>
                                Simple E-commerce
                            </div>
                            <div className={s.picture}>
                                <img src={beerstore} alt="beer store"/>
                            </div>
                            <div className={s.description}>
                                <div>One of my first projects - simple E-commerce page with hardcoded data.</div>
                                <div>Combination of Bootstrap 4 and Styled Components.</div>
                                <div>PayPal sandbox payments.</div>
                            </div>
                            <div className={s.icons}>

                                <img className={s.iconZ} src={bootstrap} alt="bootstap"/>
                                <img className={s.iconZ} src={styled} alt="bootstap"/>


                                {/*<img className={s.icon} src={bootstrap}/>
                                    <img className={s.icon} src={bootstrap}/>
                                    <img className={s.icon} src={bootstrap}/>*/}
                            </div>
                        </div>
                    </div>
                </div>




            </OwlCarousel>
        </section>
    );
};

export default Carousel;
