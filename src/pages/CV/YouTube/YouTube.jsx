import React from 'react';
import s from "./YouTube.module.css";
import Academind from "../../../images/YouTube/Academind.jpg";
import Ashley from "../../../images/YouTube/Ashley.jpg";
import Boroda from "../../../images/YouTube/Boroda.jpg";
import Dimych from "../../../images/YouTube/Dimych.jpg";
import FreeCodeCamp from "../../../images/YouTube/FreeCodeCamp.jpg";
import JavaScriptMastery from "../../../images/YouTube/JavaScriptMastery.jpg";
import John from "../../../images/YouTube/John.jpg";
import LoftBlog from "../../../images/YouTube/LoftBlog.jpg";
import Muhammad from "../../../images/YouTube/Muhammad.jpg";
import Pasha from "../../../images/YouTube/Pasha.jpg";
import Qazi from "../../../images/YouTube/Qazi.jpg";
import Vladilen from "../../../images/YouTube/Vladilen.jpg";


const YouTube = () => {
    let b = 'gggHHHkkrZZZrrrZdddd'

    console.log(b.match(/(.)\1+/gi))

    let obj = {}

    console.log(obj.__proto__ === Object.prototype)

    return (
        <section className={s.youTube}>
            <div className="anchor" id="youtube"></div>
            <div className={s.heading}>
                <h2>YouTube channels that I've spent a total of 1000+ hours on</h2>
            </div>
            <div className={s.content}>
                <div className={s.channelBox}>
                    <a className={s.youtubeLink}
                       target="_blank"
                       href="https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g"
                       rel="noreferrer">
                        <img className={s.youtubeIcon} src={Dimych} alt="Dimych"/>
                        <div className={s.youtubeName}>IT-KAMASUTRA</div>
                    </a>
                </div>
                <div className={s.channelBox}>
                    <a className={s.youtubeLink}
                       target="_blank"
                       href="https://www.youtube.com/channel/UC7Rux8g2yrvMoOsEvFm_OGA"
                       rel="noreferrer">
                        <img className={s.youtubeIcon} src={Ashley} alt="Ashley"/>
                        <div className={s.youtubeName}>SimpleTut</div>
                    </a>
                </div>
                <div className={s.channelBox}>
                    <a className={s.youtubeLink}
                       target="_blank"
                       href="https://www.youtube.com/channel/UCg8ss4xW9jASrqWGP30jXiw"
                       rel="noreferrer">
                        <img className={s.youtubeIcon} src={Vladilen} alt="Vladilen"/>
                        <div className={s.youtubeName}>Vladilen Minin</div>
                    </a>
                </div>
                <div className={s.channelBox}>
                    <a className={s.youtubeLink}
                       target="_blank"
                       href="https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA"
                       rel="noreferrer">
                        <img className={s.youtubeIcon} src={John} alt="John"/>
                        <div className={s.youtubeName}>Coding Addict</div>
                    </a>
                </div>
                <div className={s.channelBox}>
                    <a className={s.youtubeLink}
                       target="_blank"
                       href="https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog"
                       rel="noreferrer">
                        <img className={s.youtubeIcon} src={Muhammad} alt="Muhammad"/>
                        <div className={s.youtubeName}>Online Tutorials</div>
                    </a>
                </div>
                <div className={s.channelBox}>
                    <a className={s.youtubeLink}
                       target="_blank"
                       href="https://www.youtube.com/channel/UC72FljP7m2CyHynI5fQ_Puw"
                       rel="noreferrer">
                        <img className={s.youtubeIcon} src={Pasha} alt="Pasha"/>
                        <div className={s.youtubeName}>Web Interview</div>
                    </a>
                </div>
                <div className={s.channelBox}>
                    <a className={s.youtubeLink}
                       target="_blank"
                       href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ"
                       rel="noreferrer">
                        <img className={s.youtubeIcon} src={FreeCodeCamp} alt="FreeCodeCamp"/>
                        <div className={s.youtubeName}>freeCodeCamp.org</div>
                    </a>
                </div>
                <div className={s.channelBox}>
                    <a className={s.youtubeLink}
                       target="_blank"
                       href="https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w"
                       rel="noreferrer">
                        <img className={s.youtubeIcon} src={Academind} alt="Academind"/>
                        <div className={s.youtubeName}>Academind</div>
                    </a>
                </div>
                <div className={s.channelBox}>
                    <a className={s.youtubeLink}
                       target="_blank"
                       href="https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A"
                       rel="noreferrer">
                        <img className={s.youtubeIcon} src={JavaScriptMastery} alt="JavaScript Mastery"/>
                        <div className={s.youtubeName}>JavaScript Mastery</div>
                    </a>
                </div>
                <div className={s.channelBox}>
                    <a className={s.youtubeLink}
                       target="_blank"
                       href="https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ"
                       rel="noreferrer">
                        <img className={s.youtubeIcon} src={Qazi} alt="Qazi"/>
                        <div className={s.youtubeName}>Clever Programmer</div>
                    </a>
                </div>
                <div className={s.channelBox}>
                    <a className={s.youtubeLink}
                       target="_blank"
                       href="https://www.youtube.com/channel/UCeObZv89Stb2xLtjLJ0De3Q"
                       rel="noreferrer">
                        <img className={s.youtubeIcon} src={Boroda} alt="Boroda"/>
                        <div className={s.youtubeName}>ITBeard</div>
                    </a>
                </div>
                <div className={s.channelBox}>
                    <a className={s.youtubeLink}
                       target="_blank"
                       href="https://www.youtube.com/channel/UCIIt69f5D44s2cdb9vXQNzA"
                       rel="noreferrer">
                        <img className={s.youtubeIcon} src={LoftBlog} alt="Loft Blog"/>
                        <div className={s.youtubeName}>loftblog</div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default YouTube;
