import { Box } from "@chakra-ui/react";
import Sidebar from "../../CommonComponents/Sidebar/sidebar";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import LikeHeader from "../../Like/LikeComponents/LikeHeader";
import PlaylistBody from "../../Like/LikeComponents/playlistBody";
import SpotifyAudioPlayer from "../../CommonComponents/AudioPlayer/SpotifyAudioPlayer";
import EmptyList from "../../EmptyList/emptyList";


const PlaylistDetails = () => {
  const location = useLocation();
  const { searchKey, title, img, des } = location.state;
  console.log(title);
  
  const[playlistSong, setPlayList] = useState([]);

  const [playSong, setPlaySong] = useState({
    songUrl: "",
    playSong: false,
    img: "",
    songName: "",
    singer: "",
  });

  
  const getData = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f0d9fa046cmsh6df55b1f1af7fe2p15efc9jsn9790aeeb6432",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchKey}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.data);
        setPlayList([response.data])
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <Sidebar />
      <LikeHeader
        img={img}
        heading={title}
        bg1={"#322754"}
        bg2={"#4286b2"}
      />

      {playSong.playSong ? <SpotifyAudioPlayer song={playSong} /> : ""}

  
      {playlistSong.length > 0 ? (
        <PlaylistBody playlistSong={playlistSong} bg1={"#8437aa"} bg2={"#090612"} setPlaySong={setPlaySong}/>
      ) : (
        <EmptyList />
      )}


    </Box>
  );
};

export default PlaylistDetails;
