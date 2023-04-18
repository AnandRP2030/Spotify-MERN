import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Hide,
  useDisclosure,
  Image,
  Container,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ShowCom from "./showCom";
import { FaRegUserCircle } from "react-icons/fa";
import Profile from "./Popover";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Container bg="black" maxW="container.2xl" pos="fixed" zIndex="500">
      <Flex
        bg="black"
        px={{ base: "0", lg: "35px" }}
        py="15px"
        h={{ base: "55px", lg: "70px" }}
        maxW="container.xl"
        m="auto"
        align="center"
        justify="space-between"
      >
        <Box>
          <Image
            src={require("./logo.jpg")}
            w={{ base: "90px", lg: "130px" }}
          />
        </Box>

        <Box w="50%" ml="5%">
          <Flex align="center" justify="flex-end">
            <ShowCom dir={true} />
            <Flex>
              <Box mx="14px">
                <Icon
                  as={FaRegUserCircle}
                  color="white"
                  boxSize={{ base: 9, lg: 12 }}
                  mx={2}
                  _hover={{ color: "#1ED760" }}
                />
              </Box>
              <Hide above="lg">
                <Box ref={btnRef} bg="black" onClick={onOpen}>
                  <HamburgerIcon color="white" boxSize={9} />
                </Box>
              </Hide>
              <Profile />
            </Flex>
          </Flex>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="md"
          >
            <DrawerOverlay w="600px" />
            <DrawerContent bg="black">
              <DrawerCloseButton
                color="white"
                boxShadow="none !important"
                size="lg"
              />

              <DrawerBody>
                <ShowCom dir={false} />

                <Box mt="40px" ml="13px">
                  <Text
                    color="white"
                    mt="10px"
                    fontSize="30px"
                    _hover={{ color: "#1ED760" }}
                  >
                    Account
                  </Text>
                  <Text
                    color="white"
                    mt="10px"
                    fontSize="30px"
                    _hover={{ color: "#1ED760" }}
                  >
                    Log Out
                  </Text>
                </Box>
              </DrawerBody>

              <DrawerFooter>
                <Box>
                  <Image
                    src={require("./logo.jpg")}
                    w="100px"
                    mr="345px"
                    mb="40px"
                  />
                </Box>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    </Container>
  );
}

export default Navbar;
