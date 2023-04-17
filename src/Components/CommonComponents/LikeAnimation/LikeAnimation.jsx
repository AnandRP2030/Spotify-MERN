import React, { useEffect, useState } from "react";
import "./LikeAnimation.css";
import {Box, useToast, Center } from "@chakra-ui/react";
import { likePageDisplaySong } from "../../../Redux/LikedSong/likeThunk";
import {useDispatch} from 'react-redux';


const LikeAnimation = ({song}) => {
  const toast = useToast();
  const dispatch = useDispatch();


  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(false)
  },[song])

  const handleClick = () => {
    setIsActive(!isActive);

    if (!isActive) {
      toast({
        position: "top-center",

        duration: 2000,
        render: () => (
          <Center color="white" p={3} bg="#676767">
            Song Added to Favorite
          </Center>
        ),
      });

      dispatch(likePageDisplaySong(song))

    } else {
      toast({
        position: "top-center",
        duration: 2000,
        render: () => (
          <Center color="white" p={3} bg='#676767'>
            Song Removed from Favorite
          </Center> 
        ),
      });
    }
  };

  useEffect(() => {
    setIsActive(false);
  },[])

  return (
    <div
      w="50px"
      h="50px"
      className={`heart ${isActive ? "is-active" : ""} controlPos`}
      onClick={handleClick}
    ></div>
  );
};

export default LikeAnimation;
