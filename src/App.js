import {Flex, Heading, IconButton, Spacer, useColorMode, VStack} from "@chakra-ui/react";
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";

function App() {

    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === "dark";


    return (
        <VStack p={5}>
            <Flex w="100%">
                <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
                    Portfolio
                </Heading>
                <Spacer></Spacer>
                <IconButton icon={<FaLinkedin/>} isRound="true" onClick={toggleColorMode}></IconButton>
                <IconButton ml={2} icon={<FaInstagram/>} isRound="true" onClick={toggleColorMode}></IconButton>
                <IconButton ml={2} icon={<FaGithub/>} isRound="true" onClick={toggleColorMode}></IconButton>
                <IconButton ml={8} icon={isDark ? <FaSun/> : <FaMoon/>} isRound="true"
                            onClick={toggleColorMode}></IconButton>
            </Flex>
            <Header></Header>
            <Social></Social>
            <Profile></Profile>
        </VStack>

    );
}

export default App;
