import React from "react";
import { Box } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  ModalCloseButton,
  Button,
  Input,
  FormLabel,
  FormControl,
  Icon,
  Grid,
  Center,
} from "@chakra-ui/react";

import PlaylistCard from "./PlaylistCard";

const PlaylistBody = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [playlistArr, setPlaylistArr] = useState([
    {
      title: "Liked Songs",
      description: "See all your liked song",
      img: "https://cdn.pixabay.com/photo/2018/05/08/21/29/spotify-3384019__480.png",
    },
    {
      title: "Shreya Ghoshal",
      description: "Shreya Ghoshal Best",
      img: "https://media.insider.in/image/upload/c_crop,g_custom/v1669033779/ds4bbdue5v8qcakdth4c.jpg",
    },
    {
      title: "Hip Hop Mix",
      description: "Hip Hop Playlist",
      img: "https://seed-mix-image.spotifycdn.com/v6/img/hip_hop/7dGJo4pcD2V6oG8kP0tJRR/en/default",
    },
    {
      title: "Top 50 - Global",
      description: "Most played - Global.",
      img: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
    },
    {
      title: "Top Hits",
      description: "",
      img: "https://i.scdn.co/image/ab67616d00001e02113734646dba79ae2634c344",
    },
    
    {
      title: "Study Playlist",
      description: "Deep Focus - Playlist.",
      img: "https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c",
    },
    {
      title: "Party",
      description: "Party - Playlist.",
      img: "https://i.scdn.co/image/ab67616d0000b2739fafb8a821738f917d909a1e",
    },
    {
      title: "Happy Vibes",
      description: "Happy vibes - Playlist.",
      img: "https://i.scdn.co/image/ab67706f000000027b6d2a5a985d54626b639a4a",
    },
    {
      title: "Latest",
      description: "Latest - Playlist.",
      img: "https://i.scdn.co/image/ab67616d00001e02df4c03d9572451c02daa4fc8",
    },
    {
      title: "Panda DJ ",
      description: "Panda - Playlist.",
      img: "https://i.scdn.co/image/ab67616d00001e02ba61b2caa1d31939600bd3c8",
    },
    {
      title: "Alan Walker",
      description: "Alan Walker - Playlist.",
      img: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2016/11/03003651/adc8d9dc-8afe-11ed-954e-0ecc81f4ee58-972x597.jpg",
    },
    {
      title: "Joker",
      description: "Joker - Playlist.",
      img: "https://i.scdn.co/image/ab6761610000f1787ad41bb6bdccff00adb6809c",
    },
    {
      title: "Fly",
      description: "Fly - Playlist.",
      img: "https://i.scdn.co/image/ab6775700000ee852c1a5ad463ffcb2e5b0e0a4a",
    },
    {
      title: "Disney Lullaby",
      description: "Disney - Playlist.",
      img: "https://i.scdn.co/image/ab67706f00000002889c7a6c4c41ccd469c3c96a",
    },
    {
      title: "Marvel Moon",
      description: "Marvel - Playlist.",
      img: "https://i.scdn.co/image/ab67616d00001e02c6275f2ac0366769a1d88d33",
    },
    {
      title: "Joker",
      description: "Joker - Playlist.",
      img: "https://i.scdn.co/image/ab67706f0000000208813c2c8994c3a21baa15f6",
    },
    {
      title: "Depths",
      description: "In to Depths - Playlist.",
      img: "https://i.scdn.co/image/ab67656300005f1f812bf8db7b2fd61233a825cc",
    },
   
   
  ]);

  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    img: "",
  });

  const createPlaylist = () => {
    setPlaylistArr([userInput, ...playlistArr]);
    setInc(inc+1)
  };

  const[inc, setInc] = useState(0);


  return (
    <Box
      w="100%"
      h="auto"
      pt="50px"
      bgGradient="linear(to-l, #5c96b2, #000001)"
    >
      <Box pos="relative" w="auto" left="20%">
        <Button h="150px" w="150px" onClick={onOpen} bgColor="#d4d5cb">
          <Icon boxSize={8} as={AiOutlinePlus} />
        </Button>
        <Text mt="20px" fontSize="2xl" color="#d4d5cb">
          {" "}
          New Playlist
        </Text>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent pos="relative" top="200px">
            <ModalHeader>Create New Playlist</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  value={userInput.title}
                  placeholder="Playlist title"
                  onChange={(e) =>
                    setUserInput((prevState) => ({
                      ...prevState,
                      title: e.target.value,
                    }))
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Input
                  value={userInput.description}
                  onChange={(e) =>
                    setUserInput((prevState) => ({
                      ...prevState,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Playlist description"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Playlist Image</FormLabel>
                <Input
                  value={userInput.img}
                  onChange={(e) =>
                    setUserInput((prevState) => ({
                      ...prevState,
                      img: e.target.value,
                    }))
                  }
                  placeholder="Playlist Image (Optional)"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={createPlaylist}>
                Create
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>

      <Center mt="50px" ml="50px">
        <Grid
          templateColumns="repeat(4, 1fr)"
          w="80%"
          pos="relative"
          left="6.2%"
          p="1%"
          pb='100px'
          h="auto"
          gap={6}
        >
        
          {playlistArr.map((card, idx) => {
            return (
              <PlaylistCard
                key={idx}
                count={idx+inc}
                img={card.img}
                title={card.title}
                des={card.description}
              />
            );
          })}
        </Grid>
      </Center>
    </Box>
  );
};
export default PlaylistBody;
