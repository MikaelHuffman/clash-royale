import "./../css/HomeLogo.css";
import logo from "../images/mikaelroyalelogo.png";

const HomeLogo = () => {
    return (
        <div id="home-logo">
            <img id="homeLogo" src={logo} alt="Mikael Royale Logo" />
        </div>
    )
}

export default HomeLogo;