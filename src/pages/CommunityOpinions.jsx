import { useEffect, useState } from "react";
import OpinionCard from "../components/OpinionCard";

const CommunityOpinions = () => {
  const [opinions, setOpinions] = useState([]);

  const loadOpinions = async () => {
    try {
      const res = await fetch("https://server-clash-royale.onrender.com/api/opinions");
      if (!res.ok) throw new Error("Failed to fetch opinions");
      const data = await res.json();
      const sorted = Array.isArray(data) ? data.slice().sort((a, b) => (b._id || 0) - (a._id || 0)) : [];
      setOpinions(sorted);
    } catch (err) {
      console.error("Error loading opinions:", err);
      setOpinions([]);
    }
  };

  useEffect(() => {
    loadOpinions();

    const handleNew = (e) => {
      const created = e?.detail;
      if (!created) { loadOpinions(); return; }
      setOpinions(prev => [created, ...prev]);
    };
    const handleUpdated = (e) => {
      const updated = e?.detail;
      if (!updated) { loadOpinions(); return; }
      setOpinions(prev => prev.map(p => (p._id === updated._id ? updated : p)));
    };
    const handleDeleted = (e) => {
      const info = e?.detail;
      if (!info) { loadOpinions(); return; }
      setOpinions(prev => prev.filter(p => p._id !== info.id));
    };

    window.addEventListener("opinionAdded", handleNew);
    window.addEventListener("opinionUpdated", handleUpdated);
    window.addEventListener("opinionDeleted", handleDeleted);

    return () => {
      window.removeEventListener("opinionAdded", handleNew);
      window.removeEventListener("opinionUpdated", handleUpdated);
      window.removeEventListener("opinionDeleted", handleDeleted);
    };
  }, []);

  const weekly = opinions.slice(0, 3);
  const allTime = opinions.slice(3, 6);

  return (
    <>
      <div id="weekly-opinions">
        <h2>This week's top opinions!</h2>
      </div>

      <div className="three-opinions-container">
        {weekly.length > 0 ? (
          weekly.map((op) => (
            <OpinionCard key={op._id} id={op._id} user={op.user} opinion={op.opinion} img_name={op.img_name} />
          ))
        ) : (
          <p>No opinions</p>
        )}
      </div>

      <div id="all-time-opinions">
        <h2>All time opinions:</h2>
      </div>

      <div className="three-opinions-container">
        {allTime.length > 0 ? (
          allTime.map((op) => (
            <OpinionCard key={op._id} id={op._id} user={op.user} opinion={op.opinion} img_name={op.img_name} />
          ))
        ) : (
          <p>No additional opinions yet.</p>
        )}
      </div>
    </>
  );
};

export default CommunityOpinions;
