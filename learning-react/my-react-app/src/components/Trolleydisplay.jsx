import React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Image1 from '../assets/image1.jpg'
import Image2 from '../assets/image2.jpg'
import Image3 from '../assets/image3.jpg'
import Image4 from '../assets/image4.png'
import '@splidejs/react-splide/css/sea-green';


export const Trolleydisplay = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "45vh", 
                    width: "140vh", backgroundColor: "rgba(128, 128, 128, 0.5)", borderRadius: "30px"}}>
            <Splide 
            options={{
                type: "loop",
                drag: "free",
                focus: "center",
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
                    speed: 2, 
                    pauseOnHover: true,
                    pauseOnFocus: false,
                },
            }}
            >
                <SplideSlide><img src={Image1} alt="Image 1" style={{ width: '295px', height: '250px' }}/><br/> Image 1</SplideSlide>
                <SplideSlide><img src={Image2} alt="Image 2" style={{ width: '295px', height: '250px' }}/><br/> Image 2</SplideSlide>
                <SplideSlide><img src={Image3} alt="Image 3" style={{ width: '295px', height: '250px' }}/><br/> Image 3</SplideSlide>
                <SplideSlide><img src={Image4} alt="Image 4" style={{ width: '295px', height: '250px' }}/><br/> Image 4</SplideSlide>
            </Splide>
        </div>
    </div>
  )
}
export default Trolleydisplay