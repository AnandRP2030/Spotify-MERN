import { Box } from "@chakra-ui/react";
import { useState } from 'react';
import AnimatedPages from "../../AinmatedPages";
import SpotifyAudioPlayer from "../CommonComponents/AudioPlayer/SpotifyAudioPlayer";
import Navbar from "../CommonComponents/Navbar/Navbar";
import Sidebar from "../CommonComponents/Sidebar/sidebar";
import Preview from "./HomeComponents/Preview";
import SpotifyPlaylist from "./HomeComponents/SpotifyPlaylist";
import SuggestedArtists from './HomeComponents/SuggestedArtists';
import styles from "./home.module.css";
import { useEffect } from "react";

const Home = () => {
  const [playSong, setPlaySong] = useState({
    songUrl: "",
    playSong: false,
    img: "",
    songName: "",
    singer: "",
  });
 
  // const getData = async () => {
  //   try{
  //     let res = await fetch('http://localhost:3000/googleRedirect');
  //     let data = await res.json();
  //     // console.log(data);
  //     return data;
  //   }catch(err) {
  //       console.log('err on navbar getdata', err)
  //   }
  // }

  // const fetchData = async () => {
  //   let x = await getData();
  //   console.log(x)
  // }
  // useEffect( () => {

  //   fetchData()
  // },[])

  return (
    <>
    <AnimatedPages>
      <Box ml={["80px","80px" ,"196px","196px","196px","196px"]} mb="60px" className={styles.homeContainer}>
      
        <Navbar bgColor="black" />
        <AnimatedPages>
        <SpotifyPlaylist artist={'Arjit Singh'} heading={"Arjit Singh"} setPlaySong={setPlaySong} />
        <SuggestedArtists setPlaySong={setPlaySong}/>
        <SpotifyPlaylist artist={'Shreya Ghoshal'} heading={"Shreya Ghoshal"} setPlaySong={setPlaySong}/>
        <SpotifyPlaylist artist={'Badshah'} heading={"Badshah"} setPlaySong={setPlaySong} />
        
        </AnimatedPages>
        <Sidebar />
        
      </Box>
      {playSong.playSong ? <SpotifyAudioPlayer song={playSong} /> : <Preview />}
       </AnimatedPages>
       </>
  );
};

export { Home };

