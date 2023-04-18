import { Box, Button, Icon, Text, VStack } from "@chakra-ui/react";
import { MdMusicOff } from "react-icons/md";
import { Link } from "react-router-dom";
import style from "./emptyList.module.css";
const EmptyList = () => {
  return (
    <Box
      w="88%"
      h="500px"
      pos="relative"
      left="195px"
      bgGradient="linear(to-b, #2d2f52, #06010e)"
    >
      <VStack pt="50px" color="white" h="auto">
        <Icon as={MdMusicOff} boxSize={10} />
        <br />
        <Text as="b" fontSize="4xl">
          Songs you like will appear here{" "}
        </Text>
        <br/>
        <Text fontSize="2xl">Save songs by tapping the heart icon. </Text>

        <Link to="/">
          <Button className={`${style.rainbow} ${style["rainbow-3"]}`} mt='20px'>
            Find Songs
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default EmptyList;
