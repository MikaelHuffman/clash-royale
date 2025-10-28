import "../css/Cards.css";
import ImageCard from "../components/ImageCard";
import { Link } from "react-router-dom";

const DeckExample = () => {
  return (
    <div>
      <div className="three-images-container">
        <ImageCard
          src="https://static.wikia.nocookie.net/clashroyale/images/a/ae/WallBreakersCardEvolution.png/revision/latest?cb=20250625235807"
          alt="Evo Wall Breakers"
        >
          The Evo Wall Breakers are extraordinary. You use Wall Breakers on offense for repeated chip damage...
        </ImageCard>

        <ImageCard
          src="https://static.wikia.nocookie.net/clashroyale/images/d/dc/ValkyrieCardEvolution.png/revision/latest?cb=20250625040929"
          alt="Evolution Valkyrie"
        >
          The Evolution Valkyrie is an incredible minitank good for offense, defense, and plain out support.
        </ImageCard>

        <ImageCard
          src="https://static.wikia.nocookie.net/clashroyale/images/c/cb/MagicArcherCard.png/revision/latest/thumbnail/width/360/height/450?cb=20180212145114"
          alt="Magic Archer"
        >
          The Magic Archer excels at piercing into other troops / the enemy tower for bonus damage.
        </ImageCard>
      </div>

      <div className="three-images-container">
        <ImageCard
          src="https://static.wikia.nocookie.net/clashroyale/images/c/c1/MightyMinerCard.png/revision/latest/thumbnail/width/360/height/450?cb=20250309164923"
          alt="Mighty Miner"
        >
          Mighty Miner is beyond incredible for defense. On top of that, you can put Wall Breakers behind him...
        </ImageCard>

        <ImageCard
          src="https://static.wikia.nocookie.net/clashroyale/images/f/f1/BombTowerCard.png/revision/latest?cb=20171212210521"
          alt="Bomb Tower"
        >
          A simple defensive tower. Helps you counter Log Bait and Fireball Bait.
        </ImageCard>

        <ImageCard
          src="https://static.wikia.nocookie.net/clashroyale/images/2/21/MinerCard.png/revision/latest/thumbnail/width/360/height/450?cb=20171212204949"
          alt="Miner"
        >
          Free damage; four seconds alive and it's better than a fireball. Most people overcommit to defending him.
        </ImageCard>
      </div>

      <div style={{ marginTop: 20 }}>
        <Link to="/MikaelsDecks">Back to Mikael's Decks</Link>
        {" • "}
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default DeckExample;