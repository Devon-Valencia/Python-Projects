import React from "react";
import { Route, Routes } from "react-router-dom";  
import { AnimeResults } from "./animeresults.jsx"; 
import { Text } from "@chakra-ui/react";
import Trolleydisplay from "./Trolleydisplay";
import Header from "./Header/Header.jsx";

const Routing = () => {
  return (
    <>
      <Header/>
      <Routes>
      <Route 
          path="/" 
          element={
            <Text 
              fontSize="4xl"  
              fontWeight="bold"  
              textAlign="center"  
              color="white"  
              mt='10vh'
            >
              Welcome to AniQuest
            </Text>
          }
        /><Route path="/search" element={<AnimeResults />} />
      </Routes>
      {location.pathname === "/" && <Trolleydisplay />}
    </>
  );
};

export default Routing;
