import React from "react";
import { ChakraProvider, Box, Flex, Button, Heading, Text, Image } from '@chakra-ui/react'


function Hero() {

  return (
    <div>
      <h1>test titleeeeeeee</h1>
      <Flex align="center" justify="space-between" py={16}>
        {/* Sección izquierda */}
        <Box maxW="xl" mr={16}>
          <Button colorScheme="blue" size="lg" mr={4}>welcome</Button>
          <Heading as="h1" size="3xl">agustinaaaaaa</Heading>
          <Text fontSize="lg" mb={8}>
            de valor de tu producto o serviser más largo o más corto, según tus necesidades
          </Text>
          <Text fontSize="lg" mb={8}>
            Texto de ejemplo que explica la propuesta de valor de tu producto o servicio. Puede ser más largo o más corto, según tus necesidades.
          </Text>
          <Button colorScheme="blue" size="lg" mr={4}>Botón 1</Button>
          <Button colorScheme="gray" size="lg">Botón 2</Button>
        </Box>
        {/* Sección derecha */}
        <Box maxW="sm">
          <Image src="https://images.unsplash.com/photo-1628541453359-9b27fa5ba8fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ28lMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Mi imagen" borderRadius="md" boxShadow="xl" />
        </Box>
      </Flex>
    </div>
 /*   <Flex className="Hero" pt='100px' h='800px'>

      <Box flex w='60%' pt='170' pl='220'>
        <Button bg="#4CAF50" color="white" size="md" borderRadius="sm" px={4}>welcome!</Button>
        <Heading>yasin araf</Heading>
        <Text fontSize={'sm'} color={'gray.500'}>  </Text>
        <Text fontSize={'sm'} color={'gray.500'}> grafic y web</Text>
        <Text fontSize={'sm'} color={'gray.500'}>  srgxgfjtjhggggggggggggggggggfhkfyilguoñihoñyilyi-hcyvk.vylifyvñfyiñcyilvlicvlc</Text>


        <Flex pt='40px'>
          <Box >
            <Button bg="#4CAF50" color="white" size="md" borderRadius="sm" px={4}>Hire me</Button>
          </Box>

          <Box>
            <Button bg="#4CAF50" color="white" size="md" borderRadius="sm" px={4}>explore</Button>
          </Box>
        </Flex>
        <Box w='30%'>
          <img src="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZ28lMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='imsgen' style={{ width: 500 }} />
        </Box>

      </Box>

    </Flex> */

  );

}

export default Hero;