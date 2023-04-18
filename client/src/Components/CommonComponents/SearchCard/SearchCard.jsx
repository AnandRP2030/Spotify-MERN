import React from "react";
import {
  Card,
  Heading,
  Image,
  Text,
  IconButton,
  Center,
  Box,
} from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa";
import style from "./SearchCard.module.css";

function SearchCard({ color, name, imageUrl }) {
  return (
    <Box
      className={style.cardContainer}
      bg={color}
      h="245px"
      variant="unstyled"
      m={"5px 5px"}
    >
      <Heading as={"h6"} size="md" color={"white"} noOfLines={2}>
        {name}
      </Heading>

      <img src={imageUrl} alt="image" className={style.image} />

      <Text className={style.songDesc} noOfLines={2}></Text>
    </Box>
  );
}

export default SearchCard;
