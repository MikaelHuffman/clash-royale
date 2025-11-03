import "../css/Home.css";
import HomeLogo from "../components/HomeLogo";
import ImageCard from "../components/ImageCard";
import { Link } from "react-router-dom";
import metadecks from "../images/metadecks.png";
import mikaelsdecks from "../images/mikaelsdecks.png";
import opinions from "../images/opinions.png";

const Home = () => {
  return (
    <div id="home">
      <div id="middle-info-container2">
        <div id="left-text2">
          <p>Clash Royale</p>
        </div>

        <div id="middle-img2">
          <HomeLogo />
        </div>

        <div id="right-text2">
          <p>Tips & Tricks</p>
        </div>
      </div>

      <div className="three-images-container2">
        <Link to="/MetaDecks"><ImageCard src={metadecks} alt="Meta Decks"/></Link>
        <Link to="/MikaelsDecks"><ImageCard src={mikaelsdecks} alt="Mikael's Decks" /></Link>
        <Link to="/CommunityOpinions"><ImageCard src={opinions} alt="Community Opinions" /></Link>
      </div>
    </div>
  );
};

export default Home;
