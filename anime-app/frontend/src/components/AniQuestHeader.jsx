import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

export const AniQuestHeader = () => {
  return (
    <Box position="absolute" top={0} left={150} p={4} bottom={10}>
      <Flex align="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Text
            fontSize="35px"
            fontWeight="bold"
            cursor="pointer"
            _hover={{ color: "blue.500" }}
          >
            AniQuest
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};
