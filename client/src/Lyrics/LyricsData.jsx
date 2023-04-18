import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Components/CommonComponents/Sidebar/sidebar";
import Navbar from "../Components/CommonComponents/Navbar/Navbar";
import { LyricsCard } from "./LyricsCard";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import SpotifyAudioPlayer from "../Components/CommonComponents/AudioPlayer/SpotifyAudioPlayer";
import Preview from "../Components/Home/HomeComponents/Preview";
import { NotPremium } from "./NotPremium";
const LyricsData = () => {
  useEffect(() => {
    getData();
  }, []);

  const data = useSelector((state) => state.lyricsReducer.data);
  const songAudio = useSelector((state) => state.lyricsReducer.songAudio);
  const isPremium = useSelector((state) => state.SignupReducer.isPremiumUser);
  const [playSong, setPlaySong] = useState({
    songUrl: "",
    playSong: false,
    img: "",
    songName: "",
    singer: "",
  });
  const dispatch = useDispatch();

  function getData() {
    // const fetch = require("node-fetch");

    const options = {
      method: "GET",
      url: "https://genius-song-lyrics1.p.rapidapi.com/chart/albums/",
      params: { per_page: "10", page: "1" },
      headers: {
        "X-RapidAPI-Key": "642dd678camsh7050427eda21061p16063bjsn2163a20f419f",
        "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const idArray = response.data.chart_items.map((ele) => {
          return ele.item.id;
        });
        dispatch({
          type: "FETCH_ID",
          payload: idArray,
        });
        dispatch({
          type: "FETCH_DATA",
          payload: response.data.chart_items,
        });
      })
      .catch(function (error) {
        return error.message;
      });
  }

  console.log(data);
  return (
    <Box bg="black" h="100vh">
      <Navbar />
      <Sidebar />
      <Box bg="black" pt="50px">
        {isPremium ? (
          <SimpleGrid
            columns={{ base: 2, lg: 4, xl: 6 }}
            ml="200px"
            bg="black"
            gap={5}
            p={8}
          >
            {data?.map((ele, index) => {
              return (
                <LyricsCard
                  prop={ele}
                  song={songAudio[index]}
                  setPlaySong={setPlaySong}
                />
              );
            })}
          </SimpleGrid>
        ) : (
          <NotPremium/>
        )}
      </Box>
      {playSong.playSong ? <SpotifyAudioPlayer song={playSong} /> : <Preview />}
    </Box>
  );
};
export default LyricsData;
