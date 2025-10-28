import { Link } from "react-router-dom";
import "../css/Home.css";
import "../css/SubmitYourOpinion.css";


const SubmitYourOpinion = () => {
  return (
    <div>
      <div id="iframe-video-container">
        <iframe
          id="iframe-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Yup78drdVAc?si=syYPRlNTSNEHW428"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div id="btn-submit">
        <h2>
          <Link to="/OpinionSubmission">Click to submit your opinion!</Link>
        </h2>
      </div>

      <div id="btn-submit">
        <h2>
          <Link to="/Contact">Click to contact us!</Link>
        </h2>
      </div>
    </div>
  );
};

export default SubmitYourOpinion;