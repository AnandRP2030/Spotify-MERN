import {
  Box,
  Center,
  Heading,
  IconButton,
  Image,
  Text
} from "@chakra-ui/react";
import React from "react";
import { FaCaretRight } from "react-icons/fa";
import style from "./Card.module.css";

function CardCom({ prop, setPlaySong }) {
  const songClicked = () => {

    setPlaySong({
      songUrl: prop.preview,
      img: prop.album.cover_xl,
      songName: prop.title_short,
      singer: prop.artist.name,
      playSong: true,
    });
  };
  return (
    <Box key={prop.album.id} className={style.cardContainer}>
      <Image src={prop.album.cover_xl} alt="image" />

      <Box className={style.playButtonDiv} key={prop.title_short}>
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
        {prop.album.title}
      </Heading>
      <Text className={style.songDesc} noOfLines={2}>
        {prop.artist.name}
      </Text>
    </Box>
  );
}

export default CardCom;
