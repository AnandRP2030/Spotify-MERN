import React from "react";
import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const PlansData = ({ ele, index }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function setCurrentPlan(i) {
    dispatch({
      type: "SET_CURRENT_PLAN",
      payload: i,
    });
    navigate("/payment");
  }
  return (
    <Flex
      bg="white"
      direction="column"
      px={{ base: "3%", xl: "1%" }}
      py="30px"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      mt="30px"
      rounded="10px"
      w={{ base: "400px", xl: "270px" }}
    >
      <Flex borderBottom="1px" direction="column" pb="15px" h="190px">
        <Flex
          fontWeight="bold"
          gap={3}
          //   align="center"
          direction={{ xl: "column" }}
          align="flex-start"
        >
          {ele.free ? (
            <Text bg="#0D72EA" color="white" px="6px" py="3px" rounded="5px">
              1 month free
            </Text>
          ) : null}
          <Text
            rounded="5px"
            color="#0D72EA"
            border="1px"
            borderColor="#0D72EA"
            px="6px"
            py="2px"
          >
            One-time plans available
          </Text>
        </Flex>
        <Text fontSize="24px" fontWeight="bold" mt="10px">
          {ele.plan}
        </Text>
        <Text fontSize="16px">{ele.day}</Text>
        <Text fontSize="16px">{ele.account}</Text>
      </Flex>
      <Flex
        direction="column"
        gap={4}
        my={{ base: "20px", xl: "35px" }}
        h="160px"
      >
        {ele.family !== undefined ? (
          <Flex>
            <CheckIcon boxSize={6} />
            <Text ml="10px">{ele.family}</Text>
          </Flex>
        ) : null}
        <Flex>
          <CheckIcon boxSize={6} />
          <Text ml="10px">{ele.adFree}</Text>
        </Flex>
        <Flex>
          <CheckIcon boxSize={6} />
          <Text ml="10px">{ele.group}</Text>
        </Flex>
        <Flex>
          <CheckIcon boxSize={6} />
          <Text ml="10px">{ele.download}</Text>
        </Flex>
      </Flex>
      <Box
        as={motion.button}
        whileHover={{
          scale: 1.05,
          color: "white",
          backgroundColor: "black",
        }}
        rounded="50px"
        w="100%"
        m="auto"
        bg="black"
        color="white"
        py="10px"
        fontWeight="bold"
        onClick={() => setCurrentPlan(index + 1)}
      >
        VIEW PLANS
      </Box>
      <Link fontSize="10px" mt="5px">
        Terms and conditions apply,
      </Link>
    </Flex>
  );
};

export default PlansData;
