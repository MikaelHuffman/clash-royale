import React, { useState } from "react";
import "../css/AddOpinion.css";

const AddOpinion = (props) => {
  const [result, setResult] = useState("");

  const addToServer = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.target;
    const formData = new FormData();
    formData.append("user", form.user.value.trim());
    formData.append("opinion", form.opinion.value.trim());
    if (form.img && form.img.files && form.img.files[0]) {
      formData.append("img", form.img.files[0]);
    }

    if (!form.user.value.trim() || !form.opinion.value.trim()) {
      setResult("Please provide both a username and an opinion.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/opinions", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const created = await response.json();
        setResult("Opinion added successfully");
        form.reset();
        if (typeof props.closeAddDialog === "function") props.closeAddDialog();
        if (typeof props.updateOpinions === "function") props.updateOpinions(created);
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
        <label htmlFor="img">Attach image (optional):</label>
        <input type="file" id="img" name="img" accept="image/*" />
      </p>

      <p>
        <button type="submit">Submit</button>
      </p>
      <p>{result}</p>
    </form>
  );
};

export default AddOpinion;
