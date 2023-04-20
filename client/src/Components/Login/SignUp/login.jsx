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

const Login = () => {
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

  let formImg0 =
    "https://media4.giphy.com/media/3oz8xWbLkqdlJf7qQE/giphy.gif?cid=ecf05e4706l8on0bjaekgf3i89spcnq3y6mm8lecc2j5gbu3&rid=giphy.gif&ct=g";
  let formImg1 =
    "https://media0.giphy.com/media/8DELprk1aN6qUlZDcw/giphy.gif?cid=ecf05e47h596wjfp2hq2jzyk34ysmj1rgbbjcbbfjpy3d0uq&rid=giphy.gif&ct=g";
  let formImg2 =
    "https://img.freepik.com/free-vector/music-concept-illustration_114360-1425.jpg?w=740&t=st=1681748295~exp=1681748895~hmac=d52a6fd1ed37b159772117e00c57ccaff21f68a8614350aaba8f52434e588961";
  let formImg3 =
    "https://www.usmobile.com/blog/wp-content/uploads/2017/02/Spotify-hacks-4-800x524.png";

  let formImages = [formImg0, formImg1];
  const [realImg, setRealImg] = useState({
    img: formImages[0],
    count: 1,
  });
  const changeImg = () => {
    helper++;
    if (helper === formImages.length) {
      helper = 0;
    }
    setRealImg({ img: formImages[helper], count: helper + 1 });
  };

  const AUTH_GOOGLE = `${import.meta.env.VITE_HOME_URL}/auth/google`;

  useEffect(() => {
    let intervalId = setInterval(changeImg, 10000);

    return () => {
      clearInterval(intervalId);
    };
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
          pt={5}
          pb={10}
        >
          <Box>
            <Center>
              <Image
                w="120px"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
                alt="logo"
                mb="20px"
              />
            </Center>
            <Text fontSize="3xl" as="b">
              {" "}
              Welcome Back
            </Text>
            <Text fontSize="md" color="gray">
              Don't you have an account ?
              <Link href="/signup" color="green">
                {" "}
                Sign up{" "}
              </Link>
            </Text>
            <VStack w="100%" mt="20px" p={1}>
              <Link
                color="teal.500"
                href={AUTH_GOOGLE}
                w="100%"
                bg="white"
              >
                <Button
                  w="100%"
                  bg="white"
                  style={btnStyle}
                  className="signUpbtn"
                >
                  <Icon as={FcGoogle} fontSize="2xl" mr="10px" /> Log in with
                  Google
                </Button>
              </Link>
              <Spacer />
              <Button
                w="100%"
                bg="white"
                style={btnStyle}
                className="signUpbtn"
              >
                {" "}
                <Icon as={RxGithubLogo} fontSize="2xl" mr="10px" />
                Log in with Github
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
              <Text> Or Log in with Email</Text>
            </Box>
            <hr style={{ borderColor: "#ded1d1" }} />
          </Box>
          <FormControl h="auto" mt="20px">
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
              bg="black"
              color="white"
              style={btnStyle}
              w="100%"
              mt="50px"
              type="submit"
              _hover={{ bg: "#1ed760" }}
            >
              {" "}
              Log in{" "}
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
export { Login };
