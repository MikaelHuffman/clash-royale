import { Link } from "react-router-dom";
import "../css/Opinions.css";

const OpinionSubmission = () => {
  return (
    <div>
      <div id="input" style={{ textAlign: "center", marginTop: 20 }}>
        <h3>Username:</h3>
        <input type="text" name="username" placeholder="Enter your username" />

        <h3>Opinion:</h3>
        <input type="text" name="opinion" placeholder="Enter your opinion" />

        <div style={{ marginTop: 12 }}>
          <button type="button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default OpinionSubmission;