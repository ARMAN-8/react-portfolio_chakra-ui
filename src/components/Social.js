import React from 'react';
import {HStack, Icon} from "@chakra-ui/react";
import {FaInstagram, FaGoogle, FaSpotify, FaTelegram  } from "react-icons/fa";

function Social(props) {
    return (
        <HStack spacing="24">
            <Icon src="https://instagram.com/arman.alimnur" as={FaInstagram} boxSize="50" />
            <Icon as={FaGoogle} boxSize="50" />
            <Icon as={FaSpotify} boxSize="50" />
            <Icon as={FaTelegram} boxSize="50" />
        </HStack>
    );
}

export default Social;
