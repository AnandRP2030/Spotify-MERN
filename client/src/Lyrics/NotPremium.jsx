import React from 'react'
import {
    Flex,
    Heading,
    Text,
    Button,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router';

export function NotPremium() {
const navigate=useNavigate();
    function goToPremium(){
navigate("/upgrade")
    }
    return (
        <Flex
            w="1fr"
            h="100vh"
            bg="#1f2120"
            justify="center"
            alignItems="center"
            boxSizing="boderBox"
            direction="column"
            ml="150px"
        >
            <Flex color="white" mb="80px" >
                <Heading fontSize="60px">Get more out of your music with Premium</Heading>
            </Flex>
            <Flex fontSize="28px" fontWeight="semibold" color="white">
                <Flex
                    h="450px"
                    w="350px"
                    bgGradient="linear(to-r, #333333,#000000)"
                    // justify="center"
                    align="center"
                    direction="column"
                >
                    <Text mt="20px">FREE</Text>
                    <Heading mt="40%">Only Music</Heading>
                </Flex>
                <Flex
                    h="450px"
                    w="350px"
                    bgGradient="linear(to-r, #03654c,#11a567)"
                    // justify="center"
                    align="center"
                    direction="column"
                >
                    <Text mt="20px">PREMIUM</Text>
                    <Heading mt="40%">Music With Lyrics</Heading>
                </Flex>
            </Flex>
            <Button 
            fontSize="23px"
            mt="4%"
            p="30px"
            borderRadius="50px"
            onClick={goToPremium}
            > GET PREMIUM</Button>

        </Flex>
    )
}
