import "./signup.css";
import {
  Box,
  HStack,
  Center,
  Image,
  Button,
  Link,
  FormLabel,
  Icon,
} from "@chakra-ui/react";
import { VStack, FormControl, Input, Spacer, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import { useState, useEffect } from "react";

const Signup = () => {
  const formStyle = {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  };

  const btnStyle = {
    borderRadius: "100px",
  };

  const userInputStyle = {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    borderRadius: "100px",
  };

  let helper = 0;

  
  let formImg1 =
  "https://img.freepik.com/free-vector/music-concept-illustration_114360-1174.jpg?w=740&t=st=1681740838~exp=1681741438~hmac=b41c68576972ae06f3f80051a644245371f724ac695e29361327c3eefa2d08a6";
  let formImg4  =
    "https://www.usmobile.com/blog/wp-content/uploads/2017/02/Spotify-hacks-4-800x524.png";
    let formImg2 =
    "https://img.freepik.com/free-vector/more-music-concept-illustration_114360-1466.jpg?w=740&t=st=1681748328~exp=1681748928~hmac=6e7fcd6ad7824baf374697190acedf5479f94246fe1e02502714f5f4a2cc4bd0";
    let formImg3 =
    "https://img.freepik.com/free-vector/music-concept-illustration_114360-1425.jpg?w=740&t=st=1681748295~exp=1681748895~hmac=d52a6fd1ed37b159772117e00c57ccaff21f68a8614350aaba8f52434e588961";
    
    let formImg0 = "https://wpimg.pixelied.com/blog/wp-content/uploads/2021/06/15134408/Spotify-Cover-Art-Size-Featured-Image.png"
    let formImages = [formImg0, formImg1, formImg2, formImg3, formImg4];
    const [realImg, setRealImg] = useState({
    img: formImages[0],
    count: 1,
  });
  const changeImg = () => {
    helper++;
    if (helper === formImages.length) {
      helper = 0;
    }
    setRealImg({ img: formImages[helper], count: helper+1 });
  };

  useEffect(() => {
   let intervalId =  setInterval(changeImg, 6000);

   return () => {
    clearInterval(intervalId);
   }
  }, []);

  return (
    <Center>
      <HStack p={4} w="65%">
        <Box
          style={formStyle}
          w="45%"
          h="auto"
          className="signupForm"
          p={5}
          pt={8}
          pb={10}
        >
          <Box>
            <Text fontSize="3xl" as="b">
              {" "}
              Get Started
            </Text>
            <Text fontSize="md" color="gray">
              already have an account ?
              <Link href="#" color="green">
                {" "}
                Login{" "}
              </Link>
            </Text>
            <VStack w="100%" mt="20px" p={1}>
              <Button
                w="100%"
                bg="white"
                style={btnStyle}
                className="signUpbtn"
              >
                <Icon as={FcGoogle} fontSize="2xl" mr="10px" /> Signup with
                Google
              </Button>
              <Spacer />
              <Button
                w="100%"
                bg="white"
                style={btnStyle}
                className="signUpbtn"
              >
                {" "}
                <Icon as={RxGithubLogo} fontSize="2xl" mr="10px" />
                Signup with Github
              </Button>
            </VStack>
          </Box>
          <Box w="90%" margin="auto" mt="20px">
            <Box
              bgColor="#fff"
              w="169px"
              pl="10px"
              pr="10px"
              m="auto"
              fontSize="sm"
              color="#998b8b"
              pos="relative"
              top="9px"
            >
              <Text> Or Sign up with Email</Text>
            </Box>
            <hr style={{ borderColor: "#ded1d1" }} />
          </Box>
          <FormControl h="auto" mt="20px">
            <Input
              style={userInputStyle}
              type="text"
              placeholder="Username"
              mt="20px"
            />
            <Spacer />
            <Input
              style={userInputStyle}
              type="email"
              placeholder="Enter your email"
              mt="20px"
            />
            <br />
            <Input
              style={userInputStyle}
              type="password"
              placeholder="Enter your password"
              mt="20px"
            />
            <Link pos="absolute" right="0" mt="70px">
              {" "}
              Forget Password ?
            </Link>
            <br />
            <Button
              colorScheme="facebook"
              style={btnStyle}
              w="100%"
              mt="50px"
              type="submit"
            >
              {" "}
              Sign up{" "}
            </Button>
          </FormControl>
        </Box>
        <Box>
          <Image w="500px" src={realImg.img} alt="sing-illus" />
        </Box>
      </HStack>
    </Center>
  );
};
export { Signup };
