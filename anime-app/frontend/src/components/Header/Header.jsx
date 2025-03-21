import React from 'react';
import { Box, Heading, Button, Flex } from '@chakra-ui/react';
import { AniQuestHeader } from './AniQuestHeader';
import { Navbar } from './Navbar';
import Hamburgermenu from './Hamburgermenu';

const Header = () => {
  return (
    <Box bg="#152232" p={10}>
      <Flex align="center">
        <Hamburgermenu />
        <AniQuestHeader/>
        <Navbar/>
      </Flex>
    </Box>
  );
};

export default Header;