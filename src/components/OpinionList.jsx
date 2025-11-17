import { useState, useEffect } from "react";
import "../css/House.css";
import "../css/Opinions.css";
import OpinionCard from "../components/OpinionCard";
import AddOpinion from "../components/AddOpinion";

const OpinionList = (props) => {
  const [opinions, setOpinions] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  const openAddDialog = () => setShowAddDialog(true);
  const closeAddDialog = () => setShowAddDialog(false);

  const updateOpinions = (opinion) => {
    setOpinions(prev => [opinion, ...prev]);
  };

  useEffect(() => {
    const loadOpinions = async () => {
      try {
        const response = await fetch("https://server-clash-royale.onrender.com/api/opinions");
        if (response.ok) {
          const data = await response.json();
          console.log("OpinionList loaded:", data); // debug
          setOpinions(data);
        } else {
          console.error("Failed to load opinions:", response.status, response.statusText);
        }
      } catch (err) {
        console.error("Network error loading opinions:", err);
      }
    };

    loadOpinions();
  }, []);

  return (
    <>
      <button className="add-opinion-btn" aria-label="Add opinion" onClick={openAddDialog}>+</button>

      {showAddDialog ? (<AddOpinion closeAddDialog={closeAddDialog} updateOpinions={updateOpinions} />) : ("")}

      <div id="opinions-list" className="columns">
        {opinions && opinions.length > 0 ? (
          opinions.map((op) => (
            <OpinionCard
              key={op._id}
              user={op.user}
              opinion={op.opinion}
            />
          ))
        ) : (
          <p>No opinions</p>
        )}
      </div>
    </>
  );
};

export default OpinionList;
