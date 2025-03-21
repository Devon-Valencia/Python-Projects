import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

export const AniQuestHeader = () => {
  return (
    <Box position="absolute" top={-2.5} left="21vh" p={3} bottom={10}>
      <Flex align="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Text
            fontSize="40px"
            fontWeight="bold"
            cursor="pointer"
            _hover={{ color: "white" }}
            textAlign={"center"}
          >
            <span style={{color: '#03a9fe'}}>Ani</span>
            <span style={{color: 'white'}}>Quest</span>
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};
