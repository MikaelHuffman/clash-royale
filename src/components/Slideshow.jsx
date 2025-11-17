import "../css/Slideshow.css";
import { useState, useEffect } from "react";
import axios from "axios";
import DeckPreview from "./DeckPreview";

const SERVER_BASE = "https://server-clash-royale.onrender.com"; 
const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState(null);

  useEffect(() => {
    const loadDecks = async () => {
      const response = await axios.get(`${SERVER_BASE}/api/decks`);
      setImages(response.data);
    };
    loadDecks();
  }, []);

  const slideForward = () => {
    setSlideIndex(slideIndex < images.length - 1 ? slideIndex + 1 : 0);
  };

  const slideBackward = () => {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : images.length - 1);
  };

  const onImageClick = (deck) => {
    setSelectedDeck(deck);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDeck(null);
  };

  if (images.length === 0) return null;

  return (
    <>
      <section id="slideshow">
        <img src={`${SERVER_BASE}/${images[slideIndex].img_name}`} onClick={() => onImageClick(images[slideIndex])} />
        <a className="arrow" onClick={slideForward} id="right-arrow" href="#">&gt;</a>
        <a className="arrow" onClick={slideBackward} id="left-arrow" href="#">&lt;</a>
      </section>

      <DeckPreview open={modalOpen && selectedDeck !== null} deck={selectedDeck} onClose={closeModal} serverBase={SERVER_BASE} />
    </>
  );
};

export default Slideshow;
