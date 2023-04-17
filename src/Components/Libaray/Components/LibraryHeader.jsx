import { Box, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import styles from '../Library.module.css';
const LibararyHeader = (props) => {

    // const userDetail = JSON.parse(localStorage.getItem("userDetail"));
    // console.log("userDetail",userDetail[0].name)
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
      className={styles.container}
    //   bgGradient={`linear(to-b, ${props.bg1}, ${props.bg2})`}
    >
      <Image
        src={useDetails[0].picture}
        h="60%"
        w="15.3%"
        pos="relative"
        alt="Like-logo"
        top="80px"
        left="2%"
        borderRadius={"50%"}
      />
      <Box
        w="50%"
        h="200px"
        color="#fff"
        pos="relative"
        left="18%"
        bottom="105px"
      >
        <Text as="b" ml="6px" fontSize={'25px'} >
          {" "}
          Library
        </Text>
        <br />
        <Text fontSize="80px" as="b">
          {useDetails?.length >0  ? useDetails[0].name : "Username"}
        </Text>
        <br />

        {/* make dynamic here */}
        <Text as="b" ml="6px">
          {" "}
          {useDetails[0].given_name} - {likedSongList ? likedSongList.length : 0} songs{" "}
        </Text>
      </Box>
    </Box>
  );
};

export default LibararyHeader;
