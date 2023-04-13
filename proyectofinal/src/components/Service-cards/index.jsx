import React from "react";
import { Container, Heading, Card, SimpleGrid, Flex, Box, Text, Image, Stack, Icon, Spacer   } from '@chakra-ui/react'



function ServiceCards() {

    return (
        <Flex>
        <Container maxW='container.sm' bg='green.400' color='#262626' >
        <Heading>aqui van los servivios lvhgygygy</Heading>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est neque debitis doloribus, quam iste corporis in quis tempore illum possimus esse. Iure sunt perferendis quia sapiente, eligendi quam repellat. Nesciunt!
    </Container>
    
    <Box bg='tomato' w='20%' p={1} color='white' display="flex" flexWrap="wrap">
      
        <Box p="6" display="flex" flexWrap="wrap" >
        <Icon as='ArrowForwardIcon' boxSize="50px" mr="4" />
        
        <Text fontSize="xl">fnhfnhf</Text>
        
        <Icon as='ArrowForwardIcon' boxSize="50px" mr="4" />
      </Box>
    </Box>
</Flex>
    );

}

export default ServiceCards;