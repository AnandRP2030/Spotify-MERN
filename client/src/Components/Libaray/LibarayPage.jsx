import Sidebar from "../CommonComponents/Sidebar/sidebar";
import Navbar from "../CommonComponents/Navbar/Navbar";
import LibraryBody from "./Components/LibraryBody";
import LibararyHeader from "./Components/LibraryHeader";
import SpotifyAudioPlayer from "../CommonComponents/AudioPlayer/SpotifyAudioPlayer";
import { useState } from "react";
import EmptyList from "../EmptyList/emptyList";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from './Library.module.css'
import ProfileComp from "../CommonComponents/Profile/ProfileComp";
const Library = () => {

 
  
  const [playSong, setPlaySong] = useState({
    songUrl: "",
    playSong: false,
    img: "",
    songName: "",
    singer: "",
  });

  const dispatch = useDispatch();
  let likedSongList = useSelector((state) => state.likeReducer.likedSong);

  const [playList, setPlayList] = useState([]);

  return (
    <div className={styles.container}  >

      {/* <ProfileComp/> */}
      {/* <Sidebar />

      <LibararyHeader
        img={"https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"}
        heading={"Liked Song"}
        bg1={"#c00b5b"}
        bg2={"#dc7aa5"}
      />

      {playSong.playSong ? <SpotifyAudioPlayer song={playSong} /> : ""}

      <LibraryBody bg1={"#c00b5b"} bg2={"#000000"} setPlaySong={setPlaySong} /> */}
      {/* {likedSongList.length > 0 ? (
        <LibraryBody bg1={"#c00b5b"} bg2={"#fff"} setPlaySong={setPlaySong} />
      ) : (
        <EmptyList />
      )} */}
    </div>
  );
};

export { Library };
