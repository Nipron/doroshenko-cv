import React from 'react';
import s from "./YouTube.module.css";
import {Link} from "react-router-dom";
import Academind from "../../../images/YouTube/Academind.jpg";
import Apollo from "../../../images/YouTube/Apollo.jpg";
import Ashley from "../../../images/YouTube/Ashley.jpg";
import Basir from "../../../images/YouTube/Basir.jpg";
import Dimych from "../../../images/YouTube/Dimych.jpg";
import FreeCodeCamp from "../../../images/YouTube/FreeCodeCamp.jpg";
import Freelancer from "../../../images/YouTube/Freelancer.jpg";
import John from "../../../images/YouTube/John.jpg";
import LoftBlog from "../../../images/YouTube/LoftBlog.jpg";
import Muhammad from "../../../images/YouTube/Muhammad.jpg";
import Pasha from "../../../images/YouTube/Pasha.jpg";
import Qazi from "../../../images/YouTube/Qazi.jpg";
import Vladilen from "../../../images/YouTube/Vladilen.jpg";
import Web from "../../../images/YouTube/Web.jpg";


const YouTube = () => {
    return (
        <section className={s.youTube}>
            <div className={s.heading}>
                <h2>YouTube channels that I've spent a total of at least 1200 hours on</h2>
            </div>
            <div className={s.content}>
                <div className={s.channelBox}>
                    <img className={s.youtubeIcon} src={Dimych}/>
                    <div>
                        <a target="_blank"
                           href="https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g">
                            IT-KAMASUTRA
                        </a>
                    </div>
                </div>
                <div className={s.channelBox}>
                    <img className={s.youtubeIcon} src={Ashley}/>
                    <div>
                        efeffeef
                    </div>
                </div>
                <div className={s.channelBox}>
                    <img className={s.youtubeIcon} src={Dimych}/>
                    <div>
                        efeffeef
                    </div>
                </div>
                <div className={s.channelBox}>
                    <img className={s.youtubeIcon} src={Dimych}/>
                    <div>
                        efeffeef
                    </div>
                </div>
                <div className={s.channelBox}>
                    <img className={s.youtubeIcon} src={Dimych}/>
                    <div>
                        efeffeef
                    </div>
                </div>
                <div className={s.channelBox}>
                    <img className={s.youtubeIcon} src={Dimych}/>
                    <div>
                        efeffeef
                    </div>
                </div>

            </div>
        </section>
    );
};

export default YouTube;
