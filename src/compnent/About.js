import "./About.css";

const About = () => {


    return (
        <div className="About" id="2">
            <h2 className="my">
                        "안녕하세요, 프론트엔드 개발자가 되기 위해 공부중인 유상협입니다."
                    </h2>
            <div className="left">
                <div className="PurPose">
                    <p>저의 첫 번째 목표는 너무 새로운 것만 추구하지 않고 필요한 코드만 정리해서 쓸 수 있는 개발자입니다.</p>
                    <p>저의 두 번째 목표는 회사에 도움을 주고 핵심이 되는 개발자입니다.</p>
                </div>
                <div className="connect">
                    <button>Github</button>
                </div>
            </div>
            <div className="right"></div>
        </div>
    )
}

export default About;