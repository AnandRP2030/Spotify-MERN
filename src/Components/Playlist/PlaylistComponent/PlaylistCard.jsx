import {
  Card,
  Text,
  Heading,
  Image,
  CardBody,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import style from "../playlist.module.css";
import { useNavigate } from "react-router";

import { MdPlaylistAdd } from "react-icons/md";

const PlaylistCard = ({ img, title, des, count }) => {
  console.log("worke");

  const navigate = useNavigate();

  const redirectPage = () => {
    if (count === 0){
      navigate("/like")
    }else if (count === 1) {
      navigate("/playlistDetails", {state:{searchKey: "Shreya%20Ghoshal", title: title, img: img, des: des}})
    }else if (count === 2) {
      navigate("/playlistDetails", {state:{searchKey: "hiphop", title: title, img: img, des: des}})
    }else if (count === 3){
      navigate("/playlistDetails", {state:{searchKey: "top", title: title, img: img, des: des}})
    }else if (count === 4){
      navigate("/playlistDetails", {state:{searchKey: "top%20hits", title: title, img: img, des: des}})
    }else if (count === 5){
      navigate("/playlistDetails", {state:{searchKey: "study", title: title, img: img, des: des}})
    }else if (count === 6) {
      navigate("/playlistDetails", {state:{searchKey: "party", title: title, img: img, des: des}})
    }else if (count === 7) {
      navigate("/playlistDetails", {state:{searchKey: "alanWalker", title: title, img: img, des: des}})
    }else {
      
      navigate("/playlistDetails", {state:{searchKey: "alanWalker", title: title, img: img, des: des}})
    }
      
      

      
      
  }

  if (!img) {
    img =
      "https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2022/03/spotify-playlist-cover-orange-headphones-032322.jpg";
  }

  if (!title) {
    title = `My Playlist ${count}`;
  }

  if (!des) {
    des = `Spotify Playlist`;
  }

  return (
    <Card
      maxW="sm"
      w="233px"
      h="270px"
      bgColor={"black"}
      color="white"
      className={style.playlistCard}
      boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
      onClick={redirectPage}

    >
      <CardBody p="10px">
        <Image
          className={style.playlistCardImg}
          src={img}
          alt="img"
          w="73%"
          h="152px"
          borderRadius="80%"
          margin="auto"
        />
        <Grid
          mt="10px"
          h="100px"
          w="100%"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={1}
        >
          <GridItem colSpan={4}>
            <Heading size="md">{title}</Heading>
          </GridItem>
          <GridItem colSpan={1}>
            <Icon
              as={MdPlaylistAdd}
              color="#4a9ad4"
              cursor="pointer"
              boxSize={8}
            />
          </GridItem>
          <GridItem colSpan={5}>
            <Text fontSize="18px">{des}</Text>
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default PlaylistCard;
