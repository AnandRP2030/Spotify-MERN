import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Skeleton,
  Text
} from "@chakra-ui/react";
import React from "react";
import { FaCaretRight } from "react-icons/fa";
import style from "./SpotifyPlaylist.module.css";
const arr = [
  {
    album: {
      id: 159458892,
      title: "Arjit Singh",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/f9bebdebb6db8441a126b5f2fb0c85d4/1000x1000-000000-80-0-0.jpg",
    },
    artist: {
      id: "3830821",
      name: "Arjit Singh",
    },
    preview:
      "https://cdns-preview-e.dzcdn.net/stream/c-ed45fd1e58cb4726403ee6d37c361ff1-2.mp3",
    title_short: "Bairiya",
  },
  {
    album: {
      id: 414487277,
      title: "Lata Mangeshkar",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/32b1dd7a97164ba140791834d70f7d4f/1000x1000-000000-80-0-0.jpg",
    },
    artist: {
      id: "154035302",
      name: "Lata MangeshKar",
    },
    preview:
      "https://cdns-preview-e.dzcdn.net/stream/c-eb0e254acff4e91f6810d4f16535589b-5.mp3",
    title_short: "Kabhi Khushi Kabhie Gham",
  },
  {
    album: {
      id: 14914239,
      title: "A.R. Rahman",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/bd34315ef977a62a9e28c1ab19bb8ac4/1000x1000-000000-80-0-0.jpg",
    },
    artist: {
      id: "491",
      name: "A.R. Rahman",
    },
    preview:
      "https://cdns-preview-c.dzcdn.net/stream/c-ca3e28f49c902abc4ba65fffdca28718-2.mp3",
    title_short: "Nee Singam Dhan",
  },
  {
    album: {
      id: 13923414,
      title: "Pritam",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/d4914ccd414067cd5e2c108867079a85/1000x1000-000000-80-0-0.jpg",
    },
    artist: {
      id: "290619",
      name: "Pritam",
    },
    preview:
      "https://cdns-preview-7.dzcdn.net/stream/c-7ff66c33e0071dc1bf6a3a5478047468-3.mp3",
    title_short: 'Kesariya (From "Brahmastra")',
  },
  {
    album: {
      id: 56402172,
      title: "Neha Kakkar",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/37e57f35a2fc007eab0c0e8a03237d59/1000x1000-000000-80-0-0.jpg",
    },
    artist: {
      id: "129846",
      name: "Neha Kakkar",
    },
    preview:
      "https://cdns-preview-2.dzcdn.net/stream/c-2e8e5bb63db61f165011af17e22f483f-3.mp3",
    title_short: "Nagada Sang Dhol",
  },
  // {
  //   album: {
  //     id: 388926307,
  //     title: "Vishal-Shekhar",
  //     cover_xl:
  //       "https://e-cdns-images.dzcdn.net/images/artist/4d2a0ddc16e20cee01b55735c285d45e/1000x1000-000000-80-0-0.jpg",
  //   },
  //   artist: {
  //     id: "7760",
  //     name: "Vishal-Shekhar",
  //   },
  // },
];
function SuggestedArtists({ setPlaySong }) {
  const songClicked = (prop) => {

    setPlaySong({
      songUrl: prop.preview,
      img: prop.album.cover_xl,
      songName: prop.title_short,
      singer: prop.artist.name,
      playSong: true,
    });
    // console.log("songClicked", setPlaySong);
  };

  return arr?.length > 0 ? (
    <Box className={style.SpotifyPlaylist} mb="-40px" bg="#121212">
      <Flex
        justify={"space-between"}
        mt={["42px", "42px", "42px", "60px", "60px"]}
      >
        <Heading>Suggested Artists</Heading>
      </Flex>
      <Grid
        className={style.listContainer}
        flexWrap="wrap"
        gridTemplateColumns={[
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
          "repeat(5, 1fr)",
          "repeat(5, 1fr)",
        ]}
        gap="20px"
      >
        {arr.map((ele) => {
          return (
            <Box key={ele.album.id} className={style.cardContainer}>
              <Image
                src={ele.album.cover_xl}
                alt="image"
                borderRadius={"50%"}
              />

              <Box className={style.playButtonDiv}>
                <IconButton
                  as={"Button"}
                  className={style.playButton}
                  right="10px"
                  top="-60px"
                  position={"absolute"}
                  opacity="0"
                  transition="all ease 0.4s"
                  bg="#1db954"
                  borderRadius="50%"
                  onClick={() => {
                    songClicked(ele);
                  }}
                  _hover={{ opacity: "1", transition: "all ease 0.4s" }}
                  variant={"unstyled"}
                  aria-label="Call Segun"
                  size="lg"
                  icon={
                    <Center>
                      <FaCaretRight fontSize={"30px"} />
                    </Center>
                  }
                />
              </Box>
              <Heading as={"h6"} size="xsm" color="#fff" noOfLines={1}>
                {ele.album.title}
              </Heading>
              <Text className={style.songDesc} noOfLines={2}>
                {ele.artist.name}
              </Text>
            </Box>
          );
        })}
      </Grid>
    </Box>
  ) : (
    <Grid
      flexWrap="wrap"
      gridTemplateColumns={[
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
        "repeat(6, 1fr)",
        "repeat(6, 1fr)",
      ]}
      gap="20px"
    >
      {[...new Array(20)].map((ele) => {
        return (
          <Box>
            <Skeleton height="300px" startColor="#000000" endColor="#434343" />
          </Box>
        );
      })}
    </Grid>
  );
}

export default SuggestedArtists;
