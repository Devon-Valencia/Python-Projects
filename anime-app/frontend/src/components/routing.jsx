import React from "react";
import { Route, Routes } from "react-router-dom";  
import { AniQuestHeader } from "./AniQuestHeader"; 
import { AnimeResults } from "./AnimeResults"; 
import { Navbar } from "./Navbar"; 
import { Text } from "@chakra-ui/react";

const Routing = () => {
  return (
    <>
      <AniQuestHeader />
      <Navbar /> 
      <Routes>
      <Route 
          path="/" 
          element={
            <Text 
              fontSize="4xl"  
              fontWeight="bold"  
              textAlign="center"  
              color="purple.500"  
              mt={20}  
            >
              Welcome to AniQuest
            </Text>
          }
        /><Route path="/search" element={<AnimeResults />} />
      </Routes>
    </>
  );
};

export default Routing;
