import "../css/DeckPreview.css";
import React from "react";

export default function DeckPreview({ open, deck, onClose, serverBase }) {
    if (!open || !deck) return null;
    const imageUrl = `${serverBase}/${deck.img_name}`;

    return (
        <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose} aria-label="Close preview">×</button>
            <div className="modal-body">
            <img src={imageUrl} alt={deck.name || `Deck ${deck._id}`} className="modal-image" />
            <div className="modal-info">
                <h2>{deck.name}</h2>
                <p className="modal-sub">{deck.type} — {deck.author}</p>
                <p className="modal-desc">{deck.description}</p>
            </div>
            </div>
        </div>
        </div>
    );
    }
