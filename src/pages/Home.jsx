import "./../css/Home.css";
import HomeLogo from "./../components/HomeLogo";
import ImageCard from "./../components/ImageCard";

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
        <ImageCard src="./../images/metadecks.png" alt="Meta Decks" href="metadecks.html" />
        <ImageCard src="/images/mikaelsdecks.png" alt="Mikael's Decks" href="mikaeldecks.html" />
        <ImageCard src="/images/opinions.png" alt="Community Opinions" href="communityopinions.html" />
      </div>
    </div>
  );
};

export default Home;