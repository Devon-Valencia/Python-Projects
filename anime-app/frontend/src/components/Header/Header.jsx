import React from 'react';
import { Box } from '@chakra-ui/react';
import { AniQuestHeader } from './AniQuestHeader';
import { Navbar } from './Navbar';
import Hamburgermenu from './Hamburgermenu';

const Header = () => {
  return (
    <Box bg="#152232" p={9}  >
      <Box position="fixed">
        <Hamburgermenu />
        <Navbar/>
        <AniQuestHeader/>
      </Box>
    </Box>
  );
};

export default Header;