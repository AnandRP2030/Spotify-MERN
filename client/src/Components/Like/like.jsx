import Sidebar from "../CommonComponents/Sidebar/sidebar";
import LikeHeader from "./LikeComponents/LikeHeader";
import Navbar from "../CommonComponents/Navbar/Navbar";
import LikeBody from "./LikeComponents/LikeBody";
import SpotifyAudioPlayer from "../CommonComponents/AudioPlayer/SpotifyAudioPlayer";
import { useState } from "react";
import EmptyList from "../EmptyList/emptyList";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Like = () => {
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
    <div>
      <Sidebar />

      <LikeHeader
        img={"https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"}
        heading={"Liked Song"}
        bg1={"#030303"}
        bg2={"#98c1ff"}
      />

      {playSong.playSong ? <SpotifyAudioPlayer song={playSong} /> : ""}

      {likedSongList?.length > 0 ? (
        <LikeBody bg1={"#8bcde7"} bg2={"#090612"} setPlaySong={setPlaySong} />
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export { Like };
