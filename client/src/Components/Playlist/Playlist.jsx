import { Box } from "@chakra-ui/react";
import Sidebar from "../CommonComponents/Sidebar/sidebar";
import LikeHeader from "../Like/LikeComponents/LikeHeader";
import SpotifyAudioPlayer from "../CommonComponents/AudioPlayer/SpotifyAudioPlayer";
import { useState } from "react";
import PlaylistBody from "./PlaylistComponent/Playlistbody";
import EmptyList from "../EmptyList/emptyList";


const Playlist = () => {
 

  return (
    <Box>
      <Sidebar />
      <LikeHeader
        img={
          "https://e-cdns-images.dzcdn.net/images/cover/798bbbf25e2eba0c25ac7be1a8f8e89c/1000x1000-000000-80-0-0.jpg"
        }
        heading={"My Playlist"}
        bg1={"#322754"}
        bg2={"#9142b2"} 
      />

      <PlaylistBody/>
  
      {/* <LikeBody bg1={'#53aced'} bg2={'#0f0b15'} setPlaySong={setPlaySong} /> */}
    </Box>
  );
};

export default Playlist;
