import { useEffect, useState } from "react"
import "./Stacks.css";
import Virgo from "../img/Virgo.png";
import figma from "../img/figma.png";
import git from "../img/git.png";
import html from "../img/html.png";
import jquery from "../img/jquery.png"
import js from "../img/js.png"
import react from "../img/react.png"
import ts from "../img/ts.png"
import css from "../img/css.png"
import vs from "../img/vs.png"

const Stacks = () => {

   
    return (
        <div className="Stacks" id="3">
            <h2>STACKS</h2>
               
            <div className="stackZodiac">
                <img className="zodiacBody" src={Virgo} alt="Virgo"/>
                
                <div className="react Item">
                    <img src={react} />
                    <div className="itemTxt">
                        <p className="stackTitle">React.js</p>
                        <p>React 구조와 여러가지 hook들을 잘 알고 있으며, 범용적이고 재사용가능한 컴포넌트 설계를 할 수 있습니다.</p>
                    </div>
                </div>
                <div className="jquery Item">
                    <img src={jquery} />
                    <div className="itemTxt">
                        <p className="stackTitle">Jquery</p>
                        <p>관련 라이브러리와 애니메이션, 여러 메소드들을 잘 활용할 수 있습니다.</p>
                    </div>
                </div>
                <div className="javaScript Item">
                    <img src={js} />
                    <div className="itemTxt">
                        <p className="stackTitle">javascript</p>
                        <p>Javascript의 배열, 메소드, DOM을 이해하며 다양한 상황에 적용할 수 있습니다.</p>
                    </div>
                </div>
                <div className="gitHub Item">
                    <img src={git} />
                    <div className="itemTxt">
                        <p className="stackTitle">Github</p>
                        <p>commit, push, pull, clone 등 git 명령어를 사용하여 레파지토리에 접근할 수 있습니다.</p>
                    </div>
                </div>
                <div className="html Item">
                    <img src={html} />
                    <div className="itemTxt">
                        <p className="stackTitle">Html5</p>
                        <p>웹접근성, 표준성을 준수하며 시멘틱태그를 이용해 마크업 할 수 있습니다.</p>
                    </div>
                </div>
                <div className="vsCode Item">
                    <img src={vs} />
                    <div className="itemTxt">
                        <p className="stackTitle">VScode</p>
                        <p>주로 사용하는 코딩툴이며, 코딩에 편리한 확장프로그램들을 설치해 사용하고 있습니다.</p>
                    </div>
                </div>
                <div className="typeScript Item">
                    <img src={ts} />
                    <div className="itemTxt">
                        <p className="stackTitle">Typescript</p>
                        <p>
                            Js를 정적 타입으로
                            개발하여 서비스의
                            안정성을 향상 시킬 수 있습니다.
                        </p>
                    </div>
                </div>
                <div className="css Item">
                    <img src={css} />
                    <div className="itemTxt">
                        <p className="stackTitle">Css3</p>
                        <p>웹접근성, 표준성을 준수하며 시멘틱태그를<br/>이용해 마크업 할 수 있습니다.</p>
                    </div>
                </div>
                <div className="figma Item">
                    <img src={figma} />
                    <div className="itemTxt">
                        <p className="stackTitle">Figma</p>
                        <p>데스크톱, 모바일 UI/UX 시안을 작업 할 수 있으며,<br/>디버깅을 잘 활용할 수 있습니다.</p>
                    </div>
                </div>
            </div>
            <div className="gradient_bottom"></div>
            <div className="gradient_top"></div>
        </div>
    )
}

export default Stacks;