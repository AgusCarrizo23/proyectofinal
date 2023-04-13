import React from "react";
import { Flex, Box, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CardServiceComponent() {

    return (
        <Flex
            bg='#111111'
            height="70"
            width="30%"
            color="white"
            alignItems="center"
            justifyContent="space-between"
            padding="10"
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundColor="#060606"
                width="10"
                height="10"
                borderRadius="100"
                >
            <FontAwesomeIcon color="#ef4f10" icon={faHome} />
            </Box>
            <Text fontSize="xl">title</Text>
            <ArrowForwardIcon color="#ef4f10" boxSize={6}></ArrowForwardIcon>
        </Flex>
    );
}

export default CardServiceComponent;