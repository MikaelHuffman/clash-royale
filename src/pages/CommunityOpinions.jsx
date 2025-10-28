import OpinionCard from "../components/OpinionCard";

const CommunityOpinions = () => {
  return (
    <>
      <div id="weekly-opinions">
        <h2>This week's top opinions!</h2>
      </div>

      <div className="three-opinions-container">
        <OpinionCard user="User1" opinion="I love the new meta." />
        <OpinionCard user="User2" opinion="Evo Goblin Barrel OP." />
        <OpinionCard user="User3" opinion="Miner + Wall Breakers is insane." />
      </div>

      <div id="all-time-opinions"><h2>All time opinions:</h2></div>

      <div className="three-opinions-container">
        <OpinionCard user="UserA" opinion="Firecracker > everything." />
        <OpinionCard user="UserB" opinion="The Log is king." />
        <OpinionCard user="UserC" opinion="Pekka tricks me every time." />
      </div>
    </>
  );
};

export default CommunityOpinions;