import React from 'react';
import Hello from "./Hello/Hello";
import Header from "./Header/Header";
import About from "./About/About";
import SliderSlick from "../../components/Slider/SliderSlick";
import Carousel from "../../components/Carousel";
import Books from "./Books/Books";
import YouTube from "./YouTube/YouTube";

const CVMain = () => {
    return (
        <div>
            <Header/>
            <Hello/>
            <About/>
            <Carousel/>
            <YouTube/>
            <Books/>
        </div>
    );
};

export default CVMain;
