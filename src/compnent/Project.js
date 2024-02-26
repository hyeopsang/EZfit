import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import arrow from "../img/arrow_1.png"
import AppleMain from "../img/AppleFull.png"
import NewMain from "../img/NewbalanceFull.png"
import EzFitFull from "../img/EzyFitFull.png"
import close from "../img/close_icon.png"
import "./Project.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Next(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src={arrow}
            width={30}
            height={30}
            className="next"
            onClick={onClick}
        />
    )
}
function Prev(props) {
    const { className, style, onClick } = props;
    return (
        <img 
            src={arrow}
            className="prev"
            onClick={onClick}
        />
    )
}


const Project = () => {
    const [backColor, setBackColor] = useState(0);
    const slideColor = ['#BFC8D7', '#E2D2D2', '#E3E2B4' ]
   
    const [noneTxt, setNoneTxt] = useState(0);
    const [modal1, setModal1] = useState(false);
    const clickOpenModal1 = () => {
        setModal1(true);
    }
    const [modal2, setModal2] = useState(false);
    const clickOpenModal2 = () => {
        setModal2(true);
    }
    const [modal3, setModal3] = useState(false);
    const clickOpenModal3 = () => {
        setModal3(true);
    }

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1, 
        nextArrow: <Next/>,
        prevArrow: <Prev/>,
        beforeChange: (current, next) => {
            setBackColor(next);
            setNoneTxt(next);
        }
      };

    return(
        <div className="Project" id="4" style={{ background: slideColor[backColor]}}>
            <h2>PROJECT</h2>
            <div className="project_in">
                <Slider {...settings}>
                    <div className="slide_item item1"style={{backgroundColor: slideColor[0]}}>
                        <div className="project_Img"><img src={AppleMain}/></div>
                        <div className="hover" value={modal1} onClick={clickOpenModal1}></div>
                    </div>
                    <div className="slide_item item2"style={{backgroundColor: slideColor[1]}}>
                        <div className="project_Img"><img src={NewMain}/></div>
                        <div className="hover" value={modal2} onClick={clickOpenModal2}></div>
                    </div>
                    <div className="slide_item item3" style={{backgroundColor: slideColor[2]}}>
                        <div className="project_Img"><img src={EzFitFull}/></div>
                        <div className="hover" value={modal3} onClick={clickOpenModal3}></div>
                    </div>
                </Slider>
                <div className="project_about" >
                    <div className={`about1 ${backColor === 0 ? "show" : "hide"}`}>
                        <h3>AppleStore</h3>
                        <p>
                            slick 라이브러리를 이용해 슬라이드를 구현하고<br/>
                            React.js를 이용해서 퍼블리싱 했습니다.
                        </p>
                        <div className="useSkills">
                            <p># React.js</p>
                            <p># Html</p>
                            <p># Css</p>
                        </div>
                        <button className="port">사이트 바로가기</button>
                    </div>
                    <div className={`about2 ${backColor === 1 ? "show" : "hide"}`}>
                    <h3>Newbalance</h3>
                        <p>
                            html과 Css를 이용해 뉴발란스 사이트를<br/>
                            리디자인 했습니다.
                        </p>
                        <div className="useSkills">
                            <p># React.js</p>
                            <p># Html</p>
                            <p># Css</p>
                        </div>
                        <button className="port">사이트 바로가기</button>
                    </div>
                    <div className={`about3 ${backColor === 2 ? "show" : "hide"}`}>
                    <h3>EZfit</h3>
                        <p className="ezyfitAbout">
                            EZfit이란 운동 초보자들을 위한
                            운동 기록 어플입니다.
                        </p>
                        <p>
                            저는 이 팀프로젝트에서 운동과 식단,
                            운동 영상을 기록하는 기능을 맡았습니다.
                        </p>
                        <div className="useSkills">
                            <p>TeamProject</p>
                            <p># React.js</p>
                            <p># Html</p>
                            <p># Css</p>
                        </div>
                        <button className="port">사이트 바로가기</button>
                    </div>
                </div>
            </div>
            <div className="Modals">
                    <div className="appleModal" style={{display:(
                        modal1 === true ? "block" : "none"
                    )}}>
                        <div className="closeModal" onClick={()=>setModal1(false)}><img src={close}/></div>
                        <div className="modalImg"><img src={AppleMain}/></div>
                    </div>
                    <div className="NewBalanceModal" style={{display:(
                        modal2 === true ? "block" : "none"
                    )}}><div className="closeModal" onClick={()=>setModal2(false)}><img src={close}/></div>
                        <div className="modalImg"><img src={NewMain}/></div>
                    </div>
                    <div className="EzyModal" style={{display:(
                        modal3 === true ? "block" : "none"
                    )}}><div className="closeModal" onClick={()=>setModal3(false)}><img src={close}/></div>
                        <div className="modalImg"><img src={EzFitFull}/></div>
                    </div>
                </div>
        </div>
    )
}

export default Project;

