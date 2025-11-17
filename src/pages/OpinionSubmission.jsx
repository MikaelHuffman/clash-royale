import "../css/OpinionSubmission.css";
import "../css/Opinions.css";
import AddOpinion from "../components/AddOpinion";

const OpinionSubmission = () => {
  const noopClose = () => {}; // required by AddOpinion, does nothing here

  return (
    <div id="opinion-submission">
      <h2>Submit your opinion</h2>

      <div className="opinion-form-container">
        <AddOpinion closeAddDialog={noopClose} />
      </div>
    </div>
  );
};

export default OpinionSubmission;
