import { Box, Image, Text } from "@chakra-ui/react";
import Navbar from "../Upgrade/UpgradeComponents/Navbar";
import Footer from "../Upgrade/UpgradeComponents/Footer";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Circle
} from "@chakra-ui/react";
import ProfileComp from "../CommonComponents/Profile/ProfileComp";
const Account = () => {
  const useDetails = JSON.parse(localStorage.getItem("userDetail")) || [
    { given_name: "Username" },
  ];

  const editPro = {
    cursor: "pointer",
  };

  console.log(useDetails, "d");
  return (
    <Box>
      <Navbar />

      <Box w="100%" h="1300px">
        <Image
          w="100%"
          src="https://raw.githubusercontent.com/AnandRP2030/git-learn/master/premium.png"
          alt="img"
        />

          <ProfileComp/>

        <Box p="100px" w="80%" zIndex={-10} pos="relative" bottom='853px' left="22%" h="500px">
          
          <Box>
            <Text fontSize="5xl" as="b" >
              {" "}
              Account Overview
            </Text>
            <br />
            <Text fontSize="3xl" as="b" >
              {" "}
              Profile
            </Text>

            {/* <Circle pos='relative'  size="100px" bg="black" left='48%' bottom='100px' color="white">
              <Image src={useDetails[0].picture} borderRadius="50%" alt="Proile Picuture"/>
            </Circle> */}


            <TableContainer pos='relative' right='25px' >
              <Table variant="simple">
                <Tbody>
                  <Tr fontSize="20px">
                    <Td>Username</Td>
                    <Td>{useDetails[0].given_name}</Td>
                  </Tr>
                  <Tr fontSize="20px">
                    <Td>Email</Td>
                    <Td>{useDetails[0].email}</Td>
                  </Tr>
                  <Tr fontSize="20px">
                    <Td>Date of birth</Td>
                    <Td>04/11/1998</Td>
                  </Tr>
                  <Tr fontSize="20px">
                    <Td>Country or region</Td>
                    <Td>India</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Button
              style={{ cursor: "pointer" }}
            
              bg="black"
              color="white"
              pos='relative'
              top='20px'
            >
              {" "}
              Edit Profile
            </Button>
          </Box>
          <Box mt="120px">
            <Text fontSize="3xl" as="b" mt="10px">
              {" "}
              Sign out everywhere{" "}
            </Text>
            <br />
            <Text fontSize="1xl" mt='5' w="80%">
              {" "}
              This logs you out of Spotify everywhere you’re logged in,
              including the mobile, tablet, web player and desktop apps. This
              doesn't include partner devices (e.g. speakers, games consoles,
              and TVs), so for those go to your apps page and choose REMOVE
              ACCESS.
            </Text>
            <Button mt='10px' variant="outline" color='white' bg='black' >
              {" "}
              Sign out everywhere
            </Button>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Account;
