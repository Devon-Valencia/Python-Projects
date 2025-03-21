import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { Box, Button, VStack} from "@chakra-ui/react";

function Hamburgermenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
        <Box position="absolute" top={-.5} left="2vh" p={3} bottom={10}>
            <Hamburger size={30} duration={0} toggled={isOpen} toggle={setOpen} />
            {isOpen && (
                <VStack
                position="absolute"
                left="-27px"
                top="0px"
                bg="rgba(128, 128, 128, 0.2)" 
                backdropFilter="blur(10px)"
                p={4}
                boxShadow="lg"
                width="300px"
                height="100vh"
                zIndex="10"
                >
                <Button variant="ghost" width="100%" onClick={() => setOpen(false)}
                    fontSize={'14px'} fontFamily='Montserrat' display="flex" justifyContent="flex-start">{"<"}&nbsp;&nbsp;&nbsp;Close menu</Button>
                <Button variant="ghost" width="100%" fontWeight={'bold'} onClick={() => setOpen(false)}
                    fontSize={'14px'} fontFamily='Montserrat' display="flex" top="5vh" justifyContent="flex-start">Home</Button>
                <Button variant="ghost" width="100%" fontWeight={'bold'} onClick={() => setOpen(false)}
                    fontSize={'14px'} fontFamily='Montserrat' display="flex" top="5vh" justifyContent="flex-start">About</Button>
                <Button variant="ghost" width="100%" fontWeight={'bold'} onClick={() => setOpen(false)}
                    fontSize={'14px'} fontFamily='Montserrat' display="flex" top="5vh" justifyContent="flex-start">Contact</Button>
            </VStack>
            )}
        </Box>
    </div>
  );
}

export default Hamburgermenu;