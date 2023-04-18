import { Link, useNavigate } from "react-router-dom";
import { Box, Text, Flex, Grid, Icon, Heading, Center } from "@chakra-ui/react";
import SideComp from "./sideComponents";
import { HiOutlineHome } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import style from "./sidebar.module.css";
import { FiDownload } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
const Sidebar = () => {
  const navigate = useNavigate();
  const downloadApp = () => {
    const link = document.createElement("a");
    link.download = "spotifyAppDownload.exe";
    link.href = `https://github.com/AnandRP2030/Spotify-clone/raw/master/src/Components/CommonComponents/Sidebar/assets/spotifyAppDownload.exe`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("called");
  };

  return (
    <Box
      className={style.sideBox}
      bg="#000000"
      position={"fixed"}
      w={["80px", "80px", "196px", "196px", "196px", "196px"]}
      p={"24px"}
      zIndex={5}
      top="0"
      bottom={"0"}
      left="0"
    >
      {/* <img
      display='none'
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo"
        style={{ maxWidth: "130px", cursor: "pointer" }}
        // display={["none", "none", "none", "block", "block"]}
        
      /> */}
      <Flex gap={"5px"} justify="space-between">
        <FaSpotify size={"40px"} color="white" />
        <Heading
          size={"lg"}
          color={"#fff"}
          display={["none", "none", "block", "block", "block"]}
        >
          Spotify
        </Heading>
      </Flex>

      <Box mt="15px" p={"10px 0"} color="#b3b3b3">
        {/* //! made changes to useLocalStorage */}
        <Flex
          className={style.hoverText}
          h="30px"
          mt="15px"
          onClick={() => {
            localStorage.removeItem("SearchFlag", false);
            navigate("/");
          }}
        >
          <HiOutlineHome size={"30px"} />
          <Center>
            <Text
              ml="15px"
              display={["none", "none", "block", "block", "block"]}
            >
              Home
            </Text>
          </Center>
        </Flex>

        <Flex
          className={style.hoverText}
          h="30px"
          mt="15px"
          onClick={() => {
            localStorage.setItem("SearchFlag", true);
            navigate("/search");
          }}
        >
          <IoSearchOutline size={"30px"} />
          <Center>
            <Text
              ml="15px"
              display={["none", "none", "block", "block", "block"]}
            >
              Search
            </Text>
          </Center>
        </Flex>

        {/* <SideComp icon={IoSearchOutline} name="Search" flag={true} /> */}
        <Link>
          <SideComp icon={BiLibrary} name="Library" />
        </Link>
      </Box>

      <Grid h="150px" mt="20px" borderBottomColor="white">
        <Link to="/playlist">
          <Flex mt="20px" className={style.hoverText}>
            <img
              width="25px"
              style={{ height: "25px" }}
              src="https://raw.githubusercontent.com/AnandRP2030/Resource-website/master/images/playlist.jpg"
              alt="icon"
            />
            <Text
              color="#b3b3b3"
              ml="13px"
              display={["none", "none", "block", "block", "block"]}
            >
              Create Playlist
            </Text>
          </Flex>
        </Link>
        <Flex mt="20px" className={style.hoverText}>
          <Link to="/like">
            <img
              style={{ height: "25px" }}
              width="25px"
              src="https://raw.githubusercontent.com/AnandRP2030/Resource-website/master/images/love.jpg"
              alt="icon"
            />
          </Link>
          <Link to="/like">
            <Text
              ml="13px"
              color="#b3b3b3"
              display={["none", "none", "block", "block", "block"]}
            >
              {" "}
              Liked Songs
            </Text>
          </Link>
        </Flex>
        <Flex mt="20px" className={style.hoverText}>
          <img
            width="25px"
            style={{ height: "25px" }}
            src="https://github.com/AnandRP2030/Resource-website/blob/master/images/bookmark.svg.jpg?raw=true"
            alt="icon"
          />
          <Text
            ml="13px"
            color="#b3b3b3"
            display={["none", "none", "block", "block", "block"]}
          >
            {" "}
            Your Episodes
          </Text>
        </Flex>

        <Flex mt="20px" className={style.hoverText}>
          <Link to="/lyrics">
            <img
              style={{ height: "25px" }}
              width="25px"
              src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/music-logo-design.jpg"
              alt="icon"
            />
          </Link>
          <Link to="/lyrics">
            <Text
              ml="13px"
              color="#b3b3b3"
              display={["none", "none", "block", "block", "block"]}
            >
              {" "}
              Lyrics
            </Text>
          </Link>
        </Flex>
      </Grid>

      <Box h="180px" w="100%" mt="20px">
        {/* playlist box work pending  */}
      </Box>

      <Flex
        style={{ cursor: "pointer" }}
        onClick={downloadApp}
        color="white"
        w="100%"
        h="50px"
      >
        <Icon as={FiDownload} boxSize={6} />
        <Text ml="15px" display={["none", "none", "block", "block", "block"]}>
          {" "}
          Install App{" "}
        </Text>
      </Flex>
    </Box>
  );
};

export default Sidebar;
