import { Stack, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import Routing from "./components/Routing"; 
import { useNavigate } from "react-router-dom";
import '/index.css'; 

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [animeResults, setAnimeResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query);
    navigate("/search");
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
    <Box backgroundColor="#0b1622" minHeight="100vh">
      <Stack minH={"100vh"} spacing={8}>
        <Routing />
      </Stack>
    </Box>
  );
}
export default App;