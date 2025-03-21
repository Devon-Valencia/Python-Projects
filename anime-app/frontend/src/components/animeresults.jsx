import { useState, useEffect } from "react";
import { Container, Flex, Image, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export const AnimeResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("keyword");
  const filterBy = queryParams.get("filter") || "name";

  const [animeResults, setAnimeResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/genres/anime");
        const data = await response.json();
        if (data.data) {
          setGenreList(data.data);
        }
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    if (!query) return;

    const fetchAnimeResults = async () => {
      setLoading(true);
      setError(null);

      try {
        let apiUrl = `https://api.jikan.moe/v4/anime?q=${query}&order_by=score&sort=desc&page=1`;

        if (filterBy === "genre") {
          const genre = genreList.find((g) => g.name.toLowerCase() === query.toLowerCase());

          if (!genre) {
            setError(`Genre "${query}" not found.`);
            setAnimeResults([]);
            setLoading(false);
            return;
          } else {
            setError(null);
          }

          apiUrl = `https://api.jikan.moe/v4/anime?genres=${genre.mal_id}&order_by=score&sort=desc&page=1`;
        } else if (filterBy === "type") {
          apiUrl = `https://api.jikan.moe/v4/anime?type=${query}&order_by=score&sort=desc&page=1`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && data.data.length > 0) {
          const formattedResults = data.data.map((anime) => ({
            ...anime,
            english_title: anime.titles.find((title) => title.type === "English")?.title || anime.title,
            image_url: anime.images?.jpg?.image_url,
            score: anime.score || "N/A",
          }));
          setAnimeResults(formattedResults);
          setError(null);
        } else {
          setError("No results found.");
          setAnimeResults([]);
        }
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeResults();
  }, [query, filterBy, genreList]);

  return (
    <Container maxW="1400px" my={4} top={100}>
      {!query ? (
        <Text textAlign="center">
          Welcome to AniQuest! Search for your favorite anime above.
        </Text>
      ) : (
        <>
          {loading && <Text textAlign="center">Loading...</Text>}
          {error && (
            <Text textAlign="center" color="red.500">
              {error}
            </Text>
          )}
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
                <Text
                  mt={2}
                  fontSize="sm"
                  fontWeight="bold"
                  textAlign="center"
                  maxW="200px"
                  wordBreak="break-word"
                >
                  {anime.english_title}
                </Text>
                <Text fontSize="sm" color="gray.500" mt={1}>
                  ⭐ {anime.score}
                </Text>
              </Flex>
            ))}
          </Flex>
        </>
      )}
    </Container>
  );
};
