import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const AniQuestHeader = () => {
  return (
    <Container maxW={"900px"}>
      <Box px={4} my={5} borderRadius={5}>
        <Flex h="20" alignItems={"center"} justifyContent="space-between">
          {/* Left side */}
          <Flex alignItems={"center"} display={{ base: "none", sm: "flex" }}>
            <Text style={{fontSize: 50}} fontWeight="bold">
                AniQuest
            </Text>
          </Flex>
          {/* Right side */}
          <Flex></Flex>
        </Flex>
      </Box>
    </Container>
  );
};