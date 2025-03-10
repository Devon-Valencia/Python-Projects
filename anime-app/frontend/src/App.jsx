import { Container, Stack } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { AniQuestHeader } from "./components/AniQuestHeader";

function App() {
  return (
    <Stack minH={"100vh"}>
      <AniQuestHeader /> 
      <Navbar /> 
      <Container maxW={"1200px"} my={4}>
        {/* Other components can go here */}
      </Container>
    </Stack>
  );
}

export default App;