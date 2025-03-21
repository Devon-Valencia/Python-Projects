import React, { useState } from "react";
import { Box, Button, Flex, Input, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const  [isOpen, setOpen] = useState()
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
    <Box position="fixed" top=".5%" left="26.7%" p={3}>
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
      <Box position="absolute" top="50.5%" left="90%" transform="translate(-50%, -50%)">
        <Button variant='subtle' size='xs' borderRadius='5px' 
         _hover={{ color: "gray" }}>Filter</Button>
      </Box>
    </Box>
  );
};