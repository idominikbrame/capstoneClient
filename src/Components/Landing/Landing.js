import React from 'react';
import NewsLogo from '../../images/news-94.svg'
import "./Landing.css"

const Landing = () => {
    return (
        <div className={"landing"}>
            <h1>Welcome to <span>RENDER</span></h1>
            <img src={NewsLogo} alt={"News Logo"} />
        </div>
    );
};

export default Landing;