import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div className="Header">
            <div className="menu">
                <div className="menu_intro">
                    <Link to="1" spy={true} smooth={true}><p>INTRO</p></Link>
                </div>
                <div className="menu_about">
                    <Link to="2" spy={true} smooth={true}><p>ABOUT</p></Link>
                </div>
                <div className="menu_stacks">
                    <Link to="3" spy={true} smooth={true}><p>STAKS</p></Link>
                </div>
                <div className="menu_project">
                    <Link to="4" spy={true} smooth={true}><p>PROJECT</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;