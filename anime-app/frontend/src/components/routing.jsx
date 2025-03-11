import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AniQuestHeader } from "./AniQuestHeader";  // Import your header
import { AnimeResults } from "./AnimeResults";  // Import AnimeResults

const App = () => {
  return (
    <Router>
      <AniQuestHeader />
      <Routes>
        <Route path="/" element={<h1>Welcome to AniQuest</h1>} /> {/* Home Page */}
        <Route path="/search" element={<AnimeResults />} /> {/* Search Results Page */}
      </Routes>
    </Router>
  );
};

export default App;
