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

const CVMain = () => {
    return (
        <div>
            <Header/>
            <Hello/>
            <ReactPage/>
            <RNPage/>
            <Carousel/>
            <YouTube/>
            <Books/>
            <About/>
            <Contacts/>
            <Footer/>
        </div>
    );
};

export default CVMain;
