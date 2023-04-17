import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Image,
  IconButton,
  Center,
  Heading,
  Text,
  SimpleGrid,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa";
import style from "./LyricsCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import SpotifyAudioPlayer from "../Components/CommonComponents/AudioPlayer/SpotifyAudioPlayer";
import Preview from "../Components/Home/HomeComponents/Preview";

export const LyricsCard = ({ prop, song, setPlaySong }) => {
  const dispatch = useDispatch();
  const htmldata = useSelector((state) => state.lyricsReducer.htmlData);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  function songClicked() {
    setPlaySong({
      songUrl: song,
      playSong: true,
      img: prop.item.artist.image_url,
      songName: prop.item.name,
      singer: prop.item.artist.name,
    });
  }

  console.log(song);
  const fetchLyrics = (id) => {
    onOpen();
    const options = {
      method: "GET",
      url: "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/",
      params: { id: `${id}` },
      headers: {
        "X-RapidAPI-Key": "642dd678camsh7050427eda21061p16063bjsn2163a20f419f",
        "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const Data = response.data.lyrics.lyrics.body.html;
        dispatch({
          type: "HTML_DATA",
          payload: Data,
        });

        document
          .querySelector(".lyricsText")
          .children[0].childNodes.forEach((ele) => {
            ele.style.backgroundcolor = "#000000";
          });
      })
      .catch(function (error) {
        return error.message;
      });
  };

  return (
    <>
      <Box key={prop.item.id} className={style.cardContainer} p={5}>
        <Image src={prop.item.artist.image_url} alt="image" />

        <Box className={style.playButtonDiv} key={prop.item.id}>
          <IconButton
            as={"Button"}
            className={style.playButton}
            right="10px"
            top="-60px"
            position={"absolute"}
            opacity="0"
            transition="all ease 0.4s"
            bg="#1db954"
            borderRadius="50%"
            onClick={songClicked}
            _hover={{ opacity: "1", transition: "all ease 0.4s" }}
            variant={"unstyled"}
            aria-label="Call Segun"
            size="lg"
            icon={
              <Center>
                <FaCaretRight fontSize={"30px"} />
              </Center>
            }
          />
        </Box>
        <Heading as={"h6"} size="xsm" color="#fff" noOfLines={1}>
          {prop.item.full_title}
        </Heading>
        <Text className={style.songDesc} noOfLines={2}>
          {prop.item.name}
        </Text>
        <Button
          color="black"
          bg="#00d34f"
          w="full"
          size="xs"
          onClick={() => fetchLyrics(prop.item.id)}
          _hover={{ bg: "#00d34f" }}
          fontWeight="bold"
          ref={btnRef}
        >
          Lyrics
        </Button>
        {/* DrawerStart form here */}
        <Drawer
          isOpen={isOpen}
          placement="bottom"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="md"
        >
          <DrawerOverlay />
          <DrawerContent
            bg="rgba(0,0,0,0.7)"
            h="500px"
            style={{
              msOverflowStyle: "none",
              ScrollbarWidth: "none",
            }}
          >
            <DrawerCloseButton
              color="white"
              boxShadow="none !important"
              size="md"
            />

            <DrawerBody>
              <Center>
                <Text
                  as="div"
                  dangerouslySetInnerHTML={{ __html: htmldata }}
                  color="white"
                  fontSize="1.3rem"
                  className="lyricsText"
                ></Text>
              </Center>
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>

        {/* DrawerEnd form here */}
      </Box>
    </>
  );
};
