import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div id="nav-container">
      <button id="nav-toggle" onClick={toggleNav}>
        ☰
      </button>

      <nav id="main-nav" className={isOpen ? "active" : ""}>
        <ul className="columns">
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/MikaelsDecks" onClick={handleLinkClick}>
              Mikael's Decks
            </Link>
          </li>
          <li>
            <Link to="/MetaDecks" onClick={handleLinkClick}>
              Meta Decks
            </Link>
          </li>
          <li>
            <Link to="/CommunityOpinions" onClick={handleLinkClick}>
              Community Opinions
            </Link>
          </li>
          <li>
            <Link to="/SubmitYourOpinion" onClick={handleLinkClick}>
              Submit Your Opinion
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
