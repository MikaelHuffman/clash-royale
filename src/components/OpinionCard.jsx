import { useState } from "react";
import "../css/Opinions.css";

const OpinionCard = ({ user = "Username", opinion = "Opinion", id, img_name }) => {
  const [editing, setEditing] = useState(false);
  const [status, setStatus] = useState("");

  const handleDelete = async () => {
    if (!window.confirm("Delete this opinion?")) return;
    try {
      const res = await fetch(`https://server-clash-royale.onrender.com/api/opinions/${id}`, { method: "DELETE" });
      if (res.ok) {
        setStatus("Deleted");
        window.dispatchEvent(new CustomEvent("opinionDeleted", { detail: { id } }));
      } else {
        const j = await res.json().catch(() => ({}));
        setStatus(j.error || "Delete failed");
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error deleting");
    }
  };

  const startEdit = () => setEditing(true);
  const cancelEdit = () => setEditing(false);

  const submitEdit = async (e) => {
    e.preventDefault();
    setStatus("Saving...");
    const form = e.target;
    const formData = new FormData();
    formData.append("user", form.user.value.trim());
    formData.append("opinion", form.opinion.value.trim());
    if (form.img && form.img.files && form.img.files[0]) formData.append("img", form.img.files[0]);

    try {
      const res = await fetch(`https://server-clash-royale.onrender.com/api/opinions/${id}`, { 
        method: "PUT",
        body: formData,
      });
      if (res.ok) {
        const updated = await res.json();
        setStatus("Saved");
        setEditing(false);
        window.dispatchEvent(new CustomEvent("opinionUpdated", { detail: updated }));
      } else {
        const j = await res.json().catch(() => ({}));
        setStatus(j.error || "Update failed");
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error updating");
    }
  };

  return (
    <div className="opinion">
      {!editing ? (
        <>
          {img_name ? <img src={`https://server-clash-royale.onrender.com/${img_name}`} alt="opinion" style={{ maxWidth: "100%", borderRadius: 8 }} /> : null}
          <h3>{user}</h3>
          <p>{opinion}</p>
          <div style={{ marginTop: 8 }}>
            <button className="opinion-btn" onClick={startEdit}>Edit</button>
            <button className="opinion-btn" onClick={handleDelete} style={{ marginLeft: 8 }}>Delete</button>
            <span style={{ marginLeft: 12 }}>{status}</span>
          </div>
        </>
      ) : (
        <form onSubmit={submitEdit}>
          <p>
            <label>User</label>
            <input name="user" defaultValue={user} required />
          </p>
          <p>
            <label>Opinion</label>
            <textarea name="opinion" defaultValue={opinion} rows="3" required />
          </p>
          <p>
            <label>Replace image (optional)</label>
            <input type="file" name="img" accept="image/*" />
          </p>
          <div>
            <button className="opinion-btn" type="submit">Save</button>
            <button className="opinion-btn" type="button" onClick={cancelEdit} style={{ marginLeft: 8 }}>Cancel</button>
            <span style={{ marginLeft: 12 }}>{status}</span>
          </div>
        </form>
      )}
    </div>
  );
};

export default OpinionCard;
