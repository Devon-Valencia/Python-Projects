import { useEffect, useState } from "react";
import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';

const Trolleydisplay = () => {
  const [imageUrl, setImageUrl] = useState([]);
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
                setImageUrl(data.anime.map((anime) => anime.image_url));
            } else {
                setError(true);
            }
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
  }, []);

    return(
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "45vh", 
                          width: "140vh", backgroundColor: "rgba(128, 128, 128, 0.5)", borderRadius: "30px"}}>
                  <Splide 
                    options={{
                        type: "loop",
                        drag: "free",
                        focus: "center",
                        gap: '1rem',
                        perPage: 3,
                        width: '70em',
                        autoHeight: false,
                        pagination: false,
                        arrows: false,
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
                    }}
                  >
                  <Box>
                    {loading && <Spinner size="xl" />}
                    {error && <Text color="red.500">Failed to load image</Text>}
                  </Box>
                  {imageUrl.map((url, index) => (
                    <SplideSlide key={index}>
                      <img src={url} alt={`Anime ${index}`} style={{ width: '285px', height: '275px' }} />
                    </SplideSlide>
                    ))}
              </Splide>
              </div>
          </div>
    )
  }

export default Trolleydisplay;
