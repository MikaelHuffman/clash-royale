import ImageCard from "../components/ImageCard";
import "../css/Cards.css";

const MetaDecks = () => {
  return (
    <div className="page-section">
      <div className="three-images-container">
        <ImageCard src="/images/md1.png" alt="md1" >
          This evo Goblin Giant, evo Furnace deck has an incredible offense and a great potential for three crowning.
        </ImageCard>

        <ImageCard src="/images/md2.png" alt="md2" >
          This Golem deck has great defense and a great beatdown potential.
        </ImageCard>

        <ImageCard src="/images/md3.png" alt="md3" >
          Phenomenal defense combined with a sneaky Pekka.. you can't ask for much else.
        </ImageCard>
      </div>

      <div className="three-images-container">
        <ImageCard src="/images/md4.png" alt="md4" >Boss Bandit, 'nuff said.</ImageCard>
        <ImageCard src="/images/md5.png" alt="md5" >Fireball Bait but with Evos; It's a classic.</ImageCard>
        <ImageCard src="/images/md6.png" alt="md6" >Very simple logbait variation with wallbreakers and evo goblin barrel.</ImageCard>
      </div>
    </div>
  );
};

export default MetaDecks;