import React, { useState } from "react";
import "../css/AddOpinion.css";

const AddOpinion = (props) => {
  const [result, setResult] = useState("");

  const addToServer = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.target;
    const payload = {
      user: form.user.value.trim(),
      opinion: form.opinion.value.trim(),
    };

    if (!payload.user || !payload.opinion) {
      setResult("Please provide both a username and an opinion.");
      return;
    }

    try {
      const response = await fetch("https://server-clash-royale.onrender.com/api/opinions", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const created = await response.json();
        setResult("Opinion added successfully");
        form.reset();
        if (typeof props.closeAddDialog === "function") props.closeAddDialog();

        if (typeof props.updateOpinions === "function") {
          props.updateOpinions(created);
        }
        window.dispatchEvent(new CustomEvent("opinionAdded", { detail: created }));
      } else {
        let text;
        try {
          const j = await response.json();
          text = j.error || JSON.stringify(j);
        } catch (_) {
          text = await response.text();
        }
        setResult(`Error adding opinion: ${text}`);
      }
    } catch (err) {
      console.error("Network error:", err);
      setResult("Network error adding opinion");
    }
  };

  return (
    <form id="add-opinion-form" onSubmit={addToServer} className={props.inline ? "add-opinion-inline" : ""}>
      <h3>Submit New Opinion</h3>

      <p>
        <label htmlFor="user">Your name:</label>
        <input type="text" id="user" name="user" required minLength="1" />
      </p>

      <p>
        <label htmlFor="opinion">Opinion:</label>
        <textarea id="opinion" name="opinion" required minLength="3" rows="4" />
      </p>

      <p>
        <button type="submit">Submit</button>
      </p>
      <p>{result}</p>
    </form>
  );
};

export default AddOpinion;
