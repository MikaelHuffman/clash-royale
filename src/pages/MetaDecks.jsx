import ImageCard from "../components/ImageCard";
import "../css/Cards.css";

import md1 from "../images/md1.png";
import md2 from "../images/md2.png";
import md3 from "../images/md3.png";
import md4 from "../images/md4.png";
import md5 from "../images/md5.png";
import md6 from "../images/md6.png";

const MetaDecks = () => {
  return (
    <div className="page-section">
      <div className="three-images-container">
        <ImageCard src={md1} alt="md1">
          This evo Goblin Giant, evo Furnace deck has an incredible offense and a great potential for three crowning.
        </ImageCard>

        <ImageCard src={md2} alt="md2">
          This Golem deck has great defense and a great beatdown potential.
        </ImageCard>

        <ImageCard src={md3} alt="md3">
          Phenomenal defense combined with a sneaky Pekka.. you can't ask for much else.
        </ImageCard>
      </div>

      <div className="three-images-container">
        <ImageCard src={md4} alt="md4">Boss Bandit, 'nuff said.</ImageCard>
        <ImageCard src={md5} alt="md5">Fireball Bait but with Evos; It's a classic.</ImageCard>
        <ImageCard src={md6} alt="md6">Very simple logbait variation with wallbreakers and evo goblin barrel.</ImageCard>
      </div>
    </div>
  );
};

export default MetaDecks;
  