import React from 'react';
import s from "./Boutique.module.css";
import boutique from "./../../../images/AppThumbnails/boutique.png";
import {HashLink as Link} from "react-router-hash-link";

const Boutique = () => {

    console.log([1, 2, [[3, 4], 's'], '6'].toString().split(',').map(x => +x))
    console.log("5")
    console.log(5)

    return (
        <section className={s.boutique}>
            <div className="anchor" id="boutique"></div>
            <div className={s.heading}>
                <h2>My Projects</h2>
            </div>
            <div className={s.content}>
                <div className={s.contentBox + ' ' + s.w50}>
                    <h3>Socks Boutique</h3>
                    <p>The pinnacle of my studying so far. Based on React, Redux-Sagas and Firebase
                        - a ready-to-use online shop with vast functionality such as: </p>
                    <p>- E-mail/password sign-up</p>
                    <p>- Google account sign-up (can be extended to Facebook, Twitter, GitHub
                        accounts etc. - you name it)</p>
                    <p>- Forgotten password recovery (by E-mail)</p>
                    <p>- Products browsing functionality: product details, search by categories, pagination etc.</p>
                    <p>- Editable cart</p>
                    <p>- Selected goods remembering (redux-persist)</p>
                    <br/>
                    <p>Also in this project was implemented an admin CMS panel with such options:</p>
                    <p>- Add/Delete product by category</p>
                    <p>- Editable description (CKEditor)</p>
                    <p>- Upload product thumbnails from file or by link</p>
                    <br/>
                    <p>If you want to browse an admin CMS panel, please (for security reasons and to avoid repeating
                        my personal sad experience) sign up and <Link className={s.contactLink} to="#contacts">contact
                            me</Link> - I
                        will provide you with admin rights ASAP.</p>
                </div>
                <div className={s.w50}>
                    <a target="_blank"
                       href="https://doroshenko-boutique.netlify.app/"
                       rel="noreferrer">
                        <img src={boutique} className="img" alt="boutique"/>
                    </a>
                </div>

            </div>
        </section>

    );
};

export default Boutique;
