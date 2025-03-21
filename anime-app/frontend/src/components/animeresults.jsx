import { useState, useEffect } from "react";
import { Container, Flex, Image, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";  

export const AnimeResults = () => {
  const location = useLocation();  
  const queryParams = new URLSearchParams(location.search); 
  const query = queryParams.get("keyword");  
  const [animeResults, setAnimeResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;  

    const fetchAnimeResults = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&page=1`);
        const data = await response.json();

        if (data && data.data) {
          const formattedResults = data.data.map((anime) => {
            const englishTitle = anime.titles.find((title) => title.type === "English")?.title || anime.title;
            return {
              ...anime,
              english_title: englishTitle,
              image_url: anime.images?.jpg?.image_url,
            };
          });
          setAnimeResults(formattedResults);
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
  }, [query]);  

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
                  src={anime.image_url} 
                  alt={anime.english_title}
                  boxSize="300px"
                  objectFit="cover"
                  cursor="pointer"
                  borderRadius="20px"
                />
                <Text mt={2} fontSize="sm" fontWeight="bold" textAlign="center" maxW="200px" wordBreak="break-word">
                  {anime.english_title}
                </Text>
              </Flex>
            ))}
          </Flex>
        </>
      )}
    </Container>
  );
};
