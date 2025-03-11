import React, { useState } from "react";
import { Box, Flex, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";  // Import useNavigate hook

export const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();  // Initialize navigate

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle form submission on Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();  // Prevent default form submit behavior
      if (query.trim()) {
        navigate(`/search?keyword=${query}`);  // Navigate to /search with query parameter
      }
    }
  };

  return (
    <Box position="absolute" top={3} left={324} right={0} p={4}>
      <Flex align="left">
        <Input
          placeholder="Search anime..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}  // Add keyDown event
          width="450px"
          border="1px solid gray"
          borderRadius="md"
          p={2}
        />
      </Flex>
    </Box>
  );
};
