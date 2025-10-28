import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import MikaelsDecks from "./pages/MikaelsDecks";
import MetaDecks from "./pages/MetaDecks";
import CommunityOpinions from "./pages/CommunityOpinions";
import SubmitYourOpinion from "./pages/SubmitYourOpinion";
import Contact from "./pages/Contact";
import OpinionSubmission from "./pages/OpinionSubmission";
import DeckExample from "./pages/DeckExample";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="MikaelsDecks" element={<MikaelsDecks />} />
          <Route path="MetaDecks" element={<MetaDecks />} />
          <Route path="CommunityOpinions" element={<CommunityOpinions />} />
          <Route path="SubmitYourOpinion" element={<SubmitYourOpinion />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="OpinionSubmission" element={<OpinionSubmission />} />
          <Route path="DeckExample" element={<DeckExample />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
