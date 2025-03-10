import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
  return (
    <Container maxW={"900px"}>
      <Box px={4} my={4} borderRadius={5} mt={0}>
        <Flex h="16" alignItems={"center"} justifyContent="space-between">
          {/* Left side */}
          <Flex alignItems={"center"} display={{ base: "none", sm: "flex" }}>
            <Text style={{fontSize: 20}} fontWeight="bold">
              Search Anime
            </Text>
          </Flex>
          {/* Right side */}
          <Flex></Flex>
        </Flex>
      </Box>
    </Container>
  );
};