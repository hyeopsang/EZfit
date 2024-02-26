import "./Intro.css";
import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Virgo from "../img/Virgo.png"

const Intro = () => {



    return (
        <div className="Intro" id="1">
                <div className="Intro-Title">
                    <h1>
                    SANGHYEOP'S
                   </h1>
                   <h2>
                    PORTFOLIO
                   </h2>
                </div>
               
                <div className="mouse_scroll">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <div>
                        <span className="m_scroll_arrows unu"></span>
                        <span className="m_scroll_arrows doi"></span>
                        <span className="m_scroll_arrows trei"></span>
                    </div>
                </div>
               
                   
         
        </div>
    )
}

export default Intro;
