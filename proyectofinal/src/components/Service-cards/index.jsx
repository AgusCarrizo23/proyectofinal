import React from "react";
import { Container, Heading, Flex, Box } from '@chakra-ui/react'
import CardServiceComponent from "./CardService";


function ServiceCards() {

    return (
        <Flex display="flex" flexDirection="column" bgColor="#060606" height="xl" width="full">
            <Container color="white" textAlign="center">
                <Heading>Our Services</Heading>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est neque debitis doloribus, quam iste corporis in quis tempore illum possimus esse. Iure sunt perferendis quia sapiente, eligendi quam repellat. Nesciunt!
            </Container>
            <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" >
                <Box display="flex" flexDirection="row" justifyContent="space-between" width="70%" padding="10">
                <CardServiceComponent/>
                <CardServiceComponent/>
                <CardServiceComponent/>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="space-between" width="70%" padding="10">
                <CardServiceComponent/>
                <CardServiceComponent/>
                <CardServiceComponent/>
                </Box>
            </Box>

        </Flex>
    );

}

export default ServiceCards;