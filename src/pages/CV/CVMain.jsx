import React from 'react';
import Hello from "./Hello/Hello";
import Header from "./Header/Header";
import About from "./About/About";
import Carousel from "../../components/Carousel/Carousel";
import Books from "./Books/Books";
import YouTube from "./YouTube/YouTube";
import Boutique from "./Boutique/Boutique";

const CVMain = () => {
    return (
        <div>
            <Header/>
            <Hello/>
            <About/>
            <Boutique/>
            <Carousel/>
            <YouTube/>
            <Books/>
        </div>
    );
};

export default CVMain;
