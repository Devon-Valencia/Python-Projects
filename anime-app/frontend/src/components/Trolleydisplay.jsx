import { useEffect, useState } from "react";
import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css/skyblue';
import '/index.css'; 

const Trolleydisplay = () => {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/anime/random?page=1")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            return res.json();
        })
        .then((data) => {
            if (data.anime && data.anime.length > 0) {
                setAnimeData(data.anime);
            } else {
                setError(true);
            }
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
  }, []);

  return(
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "60vh"}}>
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center", height: "45vh",
        width: "140vh", backgroundColor: "rgba(128, 128, 128, 0.5)",  borderRadius: "20px",  border: "3px solid #03a9fe" 
      }}>
        <Splide 
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            gap: '1rem',
            perPage: 4,
            width: '70em',
            autoHeight: false,
            pagination: false,
            arrows: true,
            speed: 2000, 
            autoplay: true,
            pauseOnHover: true,
            pauseOnFocus: false,
            snap: true,
            perMove: 1, 
            extensions: { AutoScroll },
            autoScroll: {
              speed: 200, 
              pauseOnHover: true,
              pauseOnFocus: false,
            },
            waitForTransition: false,
            updateOnMove: true,
            resetProgress: false, 
          }}
        >
          
          <Box>
            {loading && <Spinner size="xl" />}
            {error && <Text color="red.500">Failed to load data</Text>}
          </Box>
          {animeData.map((anime, index) => (
            <SplideSlide key={index}>
              <img 
                src={anime.image_url} 
                alt={`Anime ${index}`} 
                style={{ width: '200px', height: '275px' }} 
              />
              <Text fontSize="md" fontWeight="bold" mt={2}>{anime.title}</Text>
              <Text fontSize="sm" color="yellow.200">⭐ {anime.score} </Text>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default Trolleydisplay;
