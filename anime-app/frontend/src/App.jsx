import { Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { AniQuestHeader } from "./components/AniQuestHeader";
import { AnimeResults } from "./components/AnimeResults";
import axios from "axios";
import Trolleydisplay from "./components/Trolleydisplay";
import Routing from "./components/Routing"; 
import { useLocation } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [animeResults, setAnimeResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (!searchQuery) return;

    const fetchAnime = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/anime/search?q=${searchQuery}`
        );
        setAnimeResults(response.data.anime);
      } catch (error) {
        console.error("Error fetching anime:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, [searchQuery]);

  return (
    <Stack minH={"100px"} spacing={8}>
      <Routing />
      {location.pathname !== "" && <Trolleydisplay />} 
    </Stack>
  );
}

export default App;