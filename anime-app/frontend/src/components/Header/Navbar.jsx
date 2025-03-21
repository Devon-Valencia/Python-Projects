import React, { useState } from "react";
import { Box, Flex, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();  
      if (query.trim()) {
        navigate(`/search?keyword=${query}`);  
      }
    }
  };

  return (
    <Box position="absolute" top='.3vh' left='43vh' right='0vh' p={3}>
      <Flex align="left">
        <Input
          placeholder="Search anime..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} 
          width="420px"
          backgroundColor={"white"}
          color="black"
          p={2}
          borderRadius={0}
          _placeholder={{color: "gray.500", fontFamily: "Montserrat", fontSize: "14px"}}
        />
      </Flex>
    </Box>
  );
};