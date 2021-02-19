import React from 'react';
import s from "./TrueStory.module.css";
import { HashLink as Link } from 'react-router-hash-link';

const TrueStory = () => {
    return (
        <div className={s.pages}>
            <Link to="/cv#about">Software Engineer in your late 30’s?
                Easy as an inverting a binary tree.<span>A true story</span></Link>
        </div>
    );
};

export default TrueStory;