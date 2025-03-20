import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

export const AniQuestHeader = () => {
  return (
    <Box position="absolute" top={0} left={320} p={4} bottom={10}>
      <Flex align="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Text
            fontSize="35px"
            fontWeight="bold"
            cursor="pointer"
            color="purple.500"
            _hover={{ color: "white" }}
          >
            AniQuest
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};
