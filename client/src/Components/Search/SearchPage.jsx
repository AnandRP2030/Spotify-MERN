import Navbar from "../CommonComponents/Navbar/Navbar";
import Sidebar from "../CommonComponents/Sidebar/sidebar";
import { Card, Container, Flex, Grid, Box,Divider } from "@chakra-ui/react";
import CardCom from "../CommonComponents/Card/Card";
import styles from "./Search.module.css";
import { useEffect, useState } from "react";
import AnimatedPages from "../../AinmatedPages";
import SpotifyAudioPlayer from "../CommonComponents/AudioPlayer/SpotifyAudioPlayer";
import SearchPageComp from "./Components/SearchPageComp";
const SearchPage = () => {
  const [playSong, setPlaySong] = useState({
    songUrl: "",
    playSong: false,
    img: "",
    songName: "",
    singer: "",
  });

  const [playList, setPlayList] = useState([]);
  return (
    <AnimatedPages>
      <Box ml={["80px","80px" ,"196px","196px","196px","196px"]} h='100%' bottom='0'  className={styles.homeContainer}>
        <Navbar bgColor="black" />
        <AnimatedPages>
            <SearchPageComp setPlaySong={setPlaySong} />
        </AnimatedPages>
        <Sidebar />
        
      </Box>
      {playSong.playSong ? <SpotifyAudioPlayer song={playSong} /> : null}
       </AnimatedPages>
  );
};

export { SearchPage };
