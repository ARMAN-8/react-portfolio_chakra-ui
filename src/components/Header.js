import React from 'react';
import {Box, Button, Circle, Flex, Image, Stack, Text, useColorMode, useMediaQuery} from "@chakra-ui/react";

function Header(props) {

    const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"/>
            <Flex
                direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
                    <Text fontSize="5xl" fontWeight="semibold">Привет, меня зовут</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                          bgClip="text">Nick Wilde</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>
                        Я дальний родственник Курамы. Да да, вы не ошиблись. Тот самый Курама из вселенной  Наруто
                    </Text>
                    <Button mt={8} colorScheme="blue" onClick={() => window.open("https://google.com")}>
                        Hire me
                    </Button>
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"}
                       borderRadius="full" backgroundColor="transparent" boxShadow="lg" boxSize="300px"
                       src="https://yt3.ggpht.com/ytc/AKedOLSsTIYrF0qPMl9Pf_Sc16tYxsvw4ef04rnr9NDq=s900-c-k-c0x00ffffff-no-rj"/>
            </Flex>
        </Stack>
    );
}

export default Header;
