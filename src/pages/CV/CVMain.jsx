import React from 'react';
import Hello from "./Hello/Hello";
import Header from "./Header/Header";
import About from "./About/About";
import Carousel from "../../components/Carousel/Carousel";
import Books from "./Books/Books";
import YouTube from "./YouTube/YouTube";
import Boutique from "./Boutique/Boutique";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import ReactPage from "./React/ReactPage";
import RNPage from "./ReactNative/RNPage";
import Goodness from "./Goodness/Goodness";
import Garage from "./Garage/Garage";
import NashnetTV from './NashnetTV/NashnetTV';
import Football from './Fotball/Football';

const CVMain = () => {
    return (
        <div>
            <Header/>
            <Hello/>
            <ReactPage/>
            <RNPage/>
            <NashnetTV/>
            <Football/>
            <Garage/>
            <Goodness/>
            <About/>
            <Contacts/>
            <Footer/>
        </div>
    );
};

export default CVMain;
