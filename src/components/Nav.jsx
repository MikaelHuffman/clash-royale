import { Link } from "react-router-dom";
import "../css/Nav.css";

const Nav = () => {
  return (
    <div id="nav-container">
      <button id="nav-toggle">☰</button>

      <nav id="main-nav" aria-label="Main navigation">
        <ul className="columns">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/MikaelsDecks">Mikael's Decks</Link></li>
          <li><Link to="/MetaDecks">Meta Decks</Link></li>
          <li><Link to="/CommunityOpinions">Community Opinions</Link></li>
          <li><Link to="/SubmitYourOpinion">Submit Your Opinion</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;