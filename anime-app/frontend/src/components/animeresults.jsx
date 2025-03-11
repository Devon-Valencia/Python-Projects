import { useState, useEffect } from "react";
import { Container, Flex, Image, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";  // Import useLocation hook to access query parameters

export const AnimeResults = () => {
  const location = useLocation();  // Get location object with query parameters
  const queryParams = new URLSearchParams(location.search);  // Parse query parameters
  const query = queryParams.get("keyword");  // Get the "keyword" parameter

  const [animeResults, setAnimeResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch anime results based on the query
  useEffect(() => {
    if (!query) return;  // If no query, do nothing

    const fetchAnimeResults = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&page=1`);
        const data = await response.json();

        if (data && data.data) {
          setAnimeResults(data.data);
        } else {
          setError("No results found.");
        }
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeResults();
  }, [query]);  // Re-run when query changes

  // Return component
  return (
    <Container maxW="1400px" my={4} top={100}>
      {!query ? (
        <Text textAlign="center">Welcome to AniQuest! Search for your favorite anime above.</Text>
      ) : (
        <>
          {loading && <Text textAlign="center">Loading...</Text>}
          {error && <Text textAlign="center" color="red.500">{error}</Text>}
          {!loading && !error && animeResults.length === 0 && (
            <Text textAlign="center">No results found for "{query}"</Text>
          )}
          <Flex wrap="wrap" gap={4} justify="center">
            {animeResults.map((anime) => (
              <Flex key={anime.mal_id} direction="column" align="center">
                <Image
                  src={anime.images?.jpg?.image_url} 
                  alt={anime.title}
                  boxSize="300px"
                  objectFit="cover"
                  cursor="pointer"
                  borderRadius="20px"
                />
                <Text mt={2} fontSize="sm" fontWeight="bold" textAlign="center" maxW="200px" wordBreak="break-word">
                  {anime.title}
                </Text>
              </Flex>
            ))}
          </Flex>
        </>
      )}
    </Container>
  );
};
