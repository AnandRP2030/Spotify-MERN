import { Box, HStack } from "@chakra-ui/react";
import PlayButton from "../../CommonComponents/PlayButton/playButton";
import TableRow from "./TableRow";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { useEffect } from "react";
import { likePageDisplaySong } from "../../../Redux/LikedSong/likeThunk";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import { useToast } from '@chakra-ui/react'
import style from "../like.module.css";
import { useNavigate } from "react-router-dom";
import {
  ExternalLinkIcon,
  EditIcon,
} from "@chakra-ui/icons";
import { FaPowerOff } from "react-icons/fa";
import {
  Table,
  Tbody,
  TableContainer,
  Thead,
  Tr,
  Th,
  Menu,
  MenuButton, 
  IconButton,
   MenuList, 
   MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import LikeDumb from "../../CommonComponents/LikeAnimation/LikeDumb";

const PlaylistBody = ({playlistSong, setPlaySong, bg1, bg2 }) => {

  const toast = useToast();
  const navigate = useNavigate()
  playlistSong = playlistSong[0];



  return (
    <Box
      bgGradient={`linear(to-l, ${bg1}, ${bg2})`}
      w="88%"
      h="auto"
      p="5%"
      pt="2%"
      pos="relative"
      left="195px"
    >
      <HStack w="40%">
        <PlayButton />
        <LikeDumb/>
        
        <Box>
                {/* //! menubutton */}
                <Menu color='white'>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        as={IconButton}
                        bg="blackAlpha.900"
                        color="white"
                        variant={"unstyled"}
                        aria-label="Options"
                        boxSize={10} 
                        icon={
                          isOpen ? <BsThreeDots /> : <BsThreeDots/> 
                        }
                      />
                      <MenuList w="xsm" bg={"black"}>
                        <MenuItem
                          icon={<ExternalLinkIcon boxSize={5} />}
                          bg="black"
                          color="white"
                        >
                          {" "}
                          Add to queue
                        </MenuItem>
                        <MenuItem color='white' icon={<EditIcon boxSize={5} />} bg="black">
                          {" "}
                          Profile
                        </MenuItem>
                        <MenuItem
                          icon={<ExternalLinkIcon boxSize={5} />}
                          bg="black"
                          color='white'
                          onClick={() => {
                            localStorage.removeItem("userDetail");
                            navigate("/upgrade");
                          }}
                        >
                          {" "}
                          Upgrade to Premium
                        </MenuItem>
                        <MenuItem
                          icon={<ExternalLinkIcon boxSize={5} />}
                          bg="black"
                          color='white'
                        >
                          {" "}
                          Report
                        </MenuItem>
                        <MenuItem
                          icon={<ExternalLinkIcon boxSize={5} />}
                          bg="black"
                          color='white'
                        >
                          {" "}
                          Add to playlist
                        </MenuItem>
                        
                        
                      </MenuList>
                    </>
                  )}
                </Menu>
              </Box>


      </HStack>

      <TableContainer w="95%" mt="50px" color="white">
        <Table variant="simple" borderColor="transparent">
          <Thead>
            <Tr id={style.likeTableRow}>
              <Th color="white" fontSize="18px" w="4%">
                No.
              </Th>
              <Th color="white" fontSize="18px" w="8%">
                Title
              </Th>
              <Th color="white" fontSize="18px" w="40%"></Th>
              <Th color="white" fontSize="18px" w="30%">
                Type
              </Th>

              <Th w="10%"></Th>
              <Th color="white" w="20%" fontSize="18px">
                <Icon boxSize={5} as={AiOutlineClockCircle} />{" "}
              </Th>
            </Tr>
          </Thead>
          <Tbody borderColor="transparent">
            {playlistSong?.map((song, index) => {
              
              return (
                <TableRow
                  key={index}
                  url={song.preview}
                  setPlaySong={setPlaySong}
                  id={index + 1}
                  image={song.album.cover_medium}
                  // name={"Shreya Ghoshal"}
                  title={song.title}
                  duration={32*(index+2)}
                />
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PlaylistBody;
