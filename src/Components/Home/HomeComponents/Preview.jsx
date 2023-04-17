import React from 'react'
import {Box, Heading, Text, Button, Flex} from '@chakra-ui/react';
import styles from './Preview.module.css';
import { useNavigate } from 'react-router';

function Preview() {

  const navigate = useNavigate();
  return (
    <Flex className={styles.previewbox} justify="space-between"  zIndex={6} display={["none", "none", "flex", "flex", "flex"]} >
        <Box>
        <Heading as='h6' size='xs' className={styles.heading} >Preview of Spotify</Heading>
        <Text className={styles.text} >Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed. </Text>
    </Box>
    <Box>
        <Button 
        className={styles.mybutton} 
        variant={"unstyled"}
        bg="#ffffff"
        color={"#000000"}
        borderRadius="25px"
        w="140px"
        onClick={()=>{navigate('/signup')}}
        >Sign up free</Button>
    </Box>
    </Flex>
  )
}

export default Preview