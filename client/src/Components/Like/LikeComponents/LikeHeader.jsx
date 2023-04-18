import { Box, Text, Image, Circle } from "@chakra-ui/react";
import Navbar from "../../CommonComponents/Navbar/Navbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const LikeHeader = (props) => {

  const dispatch = useDispatch();
  let likedSongList = useSelector((state) => state.likeReducer.likedSong);

  const useDetails = JSON.parse(localStorage.getItem("userDetail")) || [{"given_name": "Username"}];
  const SearchFlag = localStorage.getItem("SearchFlag");
  
  return (
    <Box
      h="340px"
      w="88%"
      left="195px"
      pos="relative"
      bgGradient={`linear(to-r, ${props.bg1}, ${props.bg2})`}
    >
      <Image
        src={props.img}
        h="55%"
        w="13.3%"
        pos="relative"
        alt="Like-logo"
        top="80px"
        left="2%"
      />
      <Box
        w="50%"
        h="200px"
        color="#fff"
        pos="relative"
        left="18%"
        bottom="105px"
      >
        <Text as="b" ml="6px">
          {" "}
          Playlist
        </Text>
        <br />
        <Text fontSize="88px" as="b">
          {props.heading ? props.heading : "Username"}
        </Text>
        <br />

        {/* make dynamic here */}
        <Text as="b" ml="6px">
          {" "}
          {useDetails[0].given_name}
        </Text>
      </Box>
    </Box>
  );
};

export default LikeHeader;
